<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|digits:10',
        ]);

        try {
            Enquiry::create($validated);
            return Inertia::render('App', ['success' => 'Enquiry submitted successfully!']);
        } catch (\Exception $e) {
            return Inertia::render('App', ['error' => 'Error: ' . $e->getMessage()]);
        }
    }
}