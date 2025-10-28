<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Easebuzz\Easebuzz;

class RegistrationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'applicant_name' => 'required|string|max:255',
            'father_or_husband_name' => 'required|string|max:255',
            'dob' => 'required|date',
            'phone' => 'required|digits:10',
            'email' => 'required|email|max:255',
            'aadhaar' => 'nullable|string|max:20',
            'pan' => 'required|string|regex:/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/',
            'address' => 'required|string|max:500',
            'city' => 'required|string|max:100',
            'pincode' => 'required|digits:6',
            'state' => 'required|string|max:100',
            'quota' => 'required|string',
            'size' => 'required|string',
            'rmcode' => 'required|string|max:50',
            'terms' => 'required|accepted',
        ]);

        try {
            // Create registration with pending status
            $registration = Registration::create(array_merge($validated, ['status' => 'pending']));

            // Prepare payment
            $amount = 1.00;
            $productinfo = 'EOI';

            // Initiate payment
            $paymentUrl = $this->initiatePaymentForRegistration(
                $registration->id,
                $validated['applicant_name'],
                $validated['email'],
                $validated['phone'],
                $amount,
                $productinfo,
                $validated
            );

            if (!$paymentUrl) {
                throw new \Exception('Payment initiation failed.');
            }

            // Return JSON response with payment URL
            return response()->json([
                'success' => true,
                'message' => 'Registration saved! Redirecting to payment...',
                'data' => $registration,
                'payment_url' => $paymentUrl
            ], 201);

        } catch (\Exception $e) {
            Log::error('Registration & Payment Error', ['message' => $e->getMessage(), 'data' => $validated]);
            return response()->json([
                'success' => false,
                'message' => 'Registration failed: ' . $e->getMessage()
            ], 500);
        }
    }

    private function initiatePaymentForRegistration($registrationId, $firstname, $email, $phone, $amount, $productinfo, $validatedData)
    {
        try {
            $MERCHANT_KEY = env('EASEBUZZ_KEY');
            $SALT = env('EASEBUZZ_SALT');
            $ENV = env('EASEBUZZ_ENV', 'prod');

            if (!$MERCHANT_KEY || !$SALT) {
                throw new \Exception('Easebuzz credentials missing in .env.');
            }

            $easebuzz = new Easebuzz($MERCHANT_KEY, $SALT, $ENV);
            $txnid = 'TXN_' . $registrationId . '_' . time() . '_' . rand(1000, 9999);

            $postData = [
                'txnid' => $txnid,
                'amount' => number_format($amount, 2, '.', ''),
                'firstname' => $firstname,
                'email' => $email,
                'phone' => $phone,
                'productinfo' => $productinfo,
                'surl' => 'https://deendayaljanawasyojnareg.com/api/payment/callback',
                'furl' => 'https://deendayaljanawasyojnareg.com/api/payment/callback',
                'udf1' => (string) $registrationId,
                'udf2' => '',
                'udf3' => '',
                'udf4' => '',
                'udf5' => '',
                'address1' => $validatedData['address'] ?? '',
                'address2' => '',
                'city' => $validatedData['city'] ?? '',
                'state' => $validatedData['state'] ?? '',
                'country' => 'India',
                'zipcode' => $validatedData['pincode'] ?? '',
            ];

            Log::info('Easebuzz Payment Initiation for Registration', ['registration_id' => $registrationId, 'postData' => $postData]);

            $result = $easebuzz->initiatePaymentAPI($postData, false);

            Log::info('Easebuzz Payment Response for Registration', ['registration_id' => $registrationId, 'result' => $result]);

            $resultData = json_decode($result, true);
            if (isset($resultData['status']) && $resultData['status'] == 1 && isset($resultData['access_key'])) {
                // Save pending payment
                Payment::create([
                    'registration_id' => $registrationId,
                    'txnid' => $txnid,
                    'amount' => $amount,
                    'status' => 'pending',
                    'response_data' => $resultData,
                ]);

                return 'https://pay.easebuzz.in/pay/' . $resultData['access_key'];
            } else {
                throw new \Exception('Payment initiation failed: Invalid response from Easebuzz.');
            }

        } catch (\Exception $e) {
            Log::error('Payment Initiation Error for Registration', ['registration_id' => $registrationId, 'message' => $e->getMessage()]);
            return null;
        }
    }

            /**
         * ✅ Refund Payment (Fetch details from DB using registration_id)
         */
        public function refundPayment($registrationId)
        {
            try {
                // Fetch registration and payment details
                $registration = Registration::findOrFail($registrationId);
                $payment = Payment::where('registration_id', $registrationId)->latest()->first();

                if (!$payment) {
                    throw new \Exception('No payment record found for this registration.');
                }

                // Easebuzz credentials
                $MERCHANT_KEY = env('EASEBUZZ_KEY');
                $SALT = env('EASEBUZZ_SALT');
                $ENV = env('EASEBUZZ_ENV', 'prod');

                if (!$MERCHANT_KEY || !$SALT) {
                    throw new \Exception('Easebuzz credentials missing in .env.');
                }

                $easebuzz = new Easebuzz($MERCHANT_KEY, $SALT, $ENV);

                // Prepare refund data
                $postData = [
                    'txnid' => $payment->txnid,
                    'refund_amount' => $payment->amount,
                    'phone' => $registration->phone,
                    'email' => $registration->email,
                    'amount' => $payment->amount,
                ];

                Log::info('Easebuzz Refund Initiation', [
                    'registration_id' => $registrationId,
                    'postData' => $postData
                ]);

                // Call Easebuzz refund API
                $result = $easebuzz->refundAPI($postData);
                $resultData = json_decode($result, true);

                Log::info('Easebuzz Refund Response', [
                    'registration_id' => $registrationId,
                    'response' => $resultData
                ]);

                // Validate response
                if (isset($resultData['status']) && $resultData['status'] == 1) {
                    // Update payment status
                    $payment->update([
                        'status' => 'refunded',
                        'refund_data' => $resultData,
                    ]);

                    return response()->json([
                        'success' => true,
                        'message' => 'Refund processed successfully.',
                        'data' => $resultData
                    ], 200);
                }

                throw new \Exception('Refund failed: Invalid response from Easebuzz.');

            } catch (\Exception $e) {
                Log::error('Refund Error', [
                    'registration_id' => $registrationId,
                    'message' => $e->getMessage()
                ]);

                return response()->json([
                    'success' => false,
                    'message' => 'Refund failed: ' . $e->getMessage()
                ], 500);
            }
        }


    public function index()
    {
        $registrations = Registration::with('payment')->latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'All registrations fetched successfully.',
            'data' => $registrations
        ], 200);
    }
}