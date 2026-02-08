import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-sans font-bold mb-8 text-center text-gray-900 border-b pb-6">
            Refund Policy
          </h1>

          <div className="space-y-8">
            <div className="bg-blue-50/50 p-6 rounded-lg border border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                This Refund Policy governs the terms and conditions for refunds applicable to registrations made on <a href="https://www.deendayaljanawasyojanareg.com" className="text-blue-600 hover:underline">www.deendayaljanawasyojanareg.com</a> for the project <strong>Aaranya Greens</strong>, a residential plotted development registered under <strong>HRERA-PKL-SNP-675-2025</strong> and approved under the Deen Dayal Jan Awas Yojna (DDJAY) of the Government of Haryana.
              </p>
              <p className="mt-4 text-gray-700 font-medium">
                By registering or making any payment on this website, the applicant agrees to be bound by the terms mentioned below.
              </p>
            </div>

            {/* 1. Eligibility for Refund */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Eligibility for Refund</h2>
              <p className="mb-4">
                The registration amount paid (₹31,000/-) is eligible for a refund within 15 (fifteen) days from the date of allotment under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>In case no plot is allotted to the applicant, or</li>
                <li>If the applicant does not wish to proceed with the allotment of the plot after allotment,</li>
              </ul>
              <p className="mt-4 font-semibold text-gray-900">Provided that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No allotment letter has been issued, and</li>
                <li>No Builder Buyer Agreement (BBA) or any other legally binding document has been executed.</li>
              </ul>
            </section>

            {/* 2. Refund Request Procedure */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Refund Request Procedure</h2>
              <p className="mb-4">
                To initiate a refund request, the applicant must submit a written request through the official communication channel mentioned on the website, along with the following details:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Applicant’s full name</li>
                <li>Registered mobile number and email ID</li>
                <li>Allotment or registration reference number</li>
                <li>Payment receipt or transaction reference</li>
                <li>Reason for cancellation</li>
                <li>Bank account details for refund processing</li>
              </ul>
              <p className="mt-4 text-sm bg-amber-50 p-3 rounded border border-amber-100 italic">
                Refund requests without complete or verifiable information may be delayed or rejected.
              </p>
            </section>

            {/* 3. Refund Processing Timeline */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Refund Processing Timeline</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Upon successful verification and approval, the refund shall be processed within 7 to 15 working days from the date of acceptance of the refund request.</li>
                <li>All refunds shall be processed only through bank transfer. Cash refunds shall not be permitted.</li>
              </ul>
            </section>

            {/* 4. Non-Refundable Conditions */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Non-Refundable Conditions</h2>
              <p className="mb-2 font-medium">The registration amount shall become non-refundable in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If the refund request is made after 15 days from the date of allotment</li>
                <li>Once an allotment letter has been issued</li>
                <li>After execution of the Builder Buyer Agreement (BBA)</li>
                <li>If cancellation arises due to non-compliance with DDJAY policy norms</li>
                <li>If incorrect, misleading, or incomplete information has been provided by the applicant</li>
              </ul>
            </section>

            {/* 5. Mode of Refund */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Mode of Refund</h2>
              <p className="mb-2">Refunds shall be credited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The same bank account from which the payment was made, or</li>
                <li>The bank account provided by the applicant, subject to verification</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 italic">
                The developer or marketing partner shall not be responsible for delays caused due to incorrect or incomplete bank details submitted by the applicant.
              </p>
            </section>

            {/* 6. Regulatory & Policy Compliance */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Regulatory & Policy Compliance</h2>
              <p className="mb-2 font-medium">All refunds shall be governed by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Deen Dayal Jan Awas Yojna (DDJAY) policy guidelines</li>
                <li>Haryana Real Estate (Regulation and Development) Act (RERA)</li>
                <li>Terms and conditions mentioned in the application form, allotment documents, and Builder Buyer Agreement (if applicable)</li>
              </ul>
            </section>

            {/* 7. Right to Amend */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Right to Amend</h2>
              <p>
                The developer reserves the right to modify, amend, or update this Refund Policy at any time in compliance with applicable laws and regulatory requirements. Any such changes shall be effective from the date of publication on the website.
              </p>
            </section>

            {/* 8. Contact Information */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
              <p>
                For refund-related queries or assistance, applicants may contact us through the official contact details provided on the website or email us at{' '}
                <a href="mailto:info@deendayaljanawasyojanareg.com" className="text-blue-600 hover:underline">
                  info@deendayaljanawasyojanareg.com
                </a>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-700 font-semibold mb-2">
              “Refund applicable within 15 days from the date of allotment, subject to terms & conditions.”
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aaranya Greens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
