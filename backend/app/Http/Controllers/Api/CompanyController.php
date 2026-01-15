<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show()
    {
        return Company::first();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $company = Company::first();

        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'phone' => 'nullable|string|max:20',
            'email' => 'sometimes|required|email|max:255',
            'facebook' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'whatsapp' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
        ]);

        $company->update($validated);

        return response()->json([
            'message' => 'Company updated successfully',
            'company' => $company
        ]);
    }
}
