<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\Auth\AdminLoginController;


Route::any('/payment/callback', [PaymentController::class, 'callback'])->name('payment.callback'); // 'any' for GET/POST from Easebuzzx`
Route::post('/register', [RegistrationController::class, 'store'])->name('register.store');
Route::post('/admin/login', [AdminLoginController::class, 'login'])->name('admin.login.submit');
Route::post('/admin/logout', [AdminLoginController::class, 'logout'])->name('admin.logout');

Route::get('/register', [RegistrationController::class, 'index'])->name('register.index');
