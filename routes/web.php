<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\Auth\AdminLoginController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\PaymentController;

// ----------------------
// Public routes
// ----------------------
Route::get('/', fn() => Inertia::render('welcome'))->name('home');

Route::get('/register', [RegistrationController::class, 'index'])->name('register.index');

Route::post('/enquiry', [EnquiryController::class, 'store'])->name('enquiry.store');

Route::get('/terms', fn() => Inertia::render('Terms'))->name('terms');
Route::get('/privacy', fn() => Inertia::render('Privacy'))->name('privacy');
Route::get('/refund-policy', fn() => Inertia::render('RefundPolicy'))->name('refund-policy');

// ----------------------
// Admin login routes
// ----------------------
Route::get('/admin/login', [AdminLoginController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [AdminLoginController::class, 'login'])->name('admin.login.submit');
Route::post('/admin/logout', [AdminLoginController::class, 'logout'])->name('admin.logout');

// ----------------------
// Protected admin routes
// ----------------------
Route::middleware(['admin'])->group(function () {
    Route::get('/admin/registrations', fn() => Inertia::render('dashboard'))->name('admin.dashboard');
});

Route::get('/payment', fn() => Inertia::render('PaymentForm'));

Route::post('/payment/initiate', [PaymentController::class, 'initiatePayment'])->name('payment.initiate');
Route::any('/payment/callback', [PaymentController::class, 'callback'])->name('payment.callback'); // 'any' for GET/POST from Easebuzzx`