<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Jenssegers\Agent\Agent;

class VisitorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Visitor::latest()->paginate(50);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'page_url' => 'nullable|string',
            'referrer' => 'nullable|string',
        ]);

        $agent = new Agent();
        $agent->setUserAgent($request->userAgent());

        $ipAddress = $request->ip();
        $userAgent = $request->userAgent();
        $pageUrl = $validated['page_url'] ?? null;

        // Check for duplicate visitor within the last 30 minutes
        $existingVisitor = Visitor::where('ip_address', $ipAddress)
            ->where('user_agent', $userAgent)
            // ->where('page_url', $pageUrl)
            ->where('created_at', '>=', now()->subMinutes(30))
            ->first();

        if ($existingVisitor) {
            return response()->json([
                'message' => 'Visitor already recorded recently',
                'visitor' => $existingVisitor
            ], 200);
        }

        $visitor = Visitor::create([
            'ip_address' => $ipAddress,
            'user_agent' => $userAgent,
            'page_url' => $pageUrl,
            'referrer' => $validated['referrer'] ?? null,
            'device_type' => $agent->deviceType(),
            'browser' => $agent->browser(),
            'operating_system' => $agent->platform(),
        ]);

        return response()->json([
            'message' => 'Visitor recorded successfully',
            'visitor' => $visitor
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Visitor::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $visitor = Visitor::findOrFail($id);
        $visitor->update($request->validate([
            'page_url' => 'nullable|string',
            'referrer' => 'nullable|string',
            'device_type' => 'nullable|string',
            'browser' => 'nullable|string',
            'operating_system' => 'nullable|string',
            'country' => 'nullable|string',
            'city' => 'nullable|string',
        ]));

        return response()->json([
            'message' => 'Visitor updated successfully',
            'visitor' => $visitor
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Visitor::findOrFail($id)->delete();

        return response()->json([
            'message' => 'Visitor deleted successfully'
        ]);
    }
}
