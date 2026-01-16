<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Quote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class QuoteController extends Controller
{
    /**
     * Store a new quote request
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'project_details' => 'required|string',
            'image' => 'nullable|file|mimes:jpg,jpeg,png,pdf|max:5120' // 5MB max
        ]);

        $imagePath = null;

        // Handle file upload
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $imagePath = $file->storeAs('quotes', $filename, 'public');
        }

        $quote = Quote::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'project_details' => $validated['project_details'],
            'image_path' => $imagePath
        ]);

        // Send email notifications
        $recipients = explode(',', env('QUOTE_NOTIFICATION_EMAILS', ''));
        foreach ($recipients as $recipient) {
            if (filter_var(trim($recipient), FILTER_VALIDATE_EMAIL)) {
                \Mail::to(trim($recipient))->send(new \App\Mail\QuoteSubmitted($quote));
            }
        }

        return response()->json([
            'message' => 'Quote request submitted successfully',
            'quote' => $quote
        ], 201);
    }

    /**
     * Get all quotes (Admin only)
     */
    public function index()
    {
        $quotes = Quote::latest()->get();
        
        return response()->json([
            'quotes' => $quotes
        ], 200);
    }

    /**
     * Get a single quote (Admin only)
     */
    public function show($id)
    {
        $quote = Quote::findOrFail($id);
        
        return response()->json([
            'quote' => $quote
        ], 200);
    }

    /**
     * Delete a quote (Admin only)
     */
    public function destroy($id)
    {
        $quote = Quote::findOrFail($id);
        
        // Delete associated image file if exists
        if ($quote->image_path) {
            Storage::disk('public')->delete($quote->image_path);
        }
        
        $quote->delete();
        
        return response()->json([
            'message' => 'Quote deleted successfully'
        ], 200);
    }
}
