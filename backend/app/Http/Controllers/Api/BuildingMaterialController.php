<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BuildingMaterial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class BuildingMaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(BuildingMaterial::latest()->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads/materials'), $fileName);
            $validated['image'] = '/uploads/materials/' . $fileName;
        }

        $material = BuildingMaterial::create($validated);

        return response()->json($material, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(BuildingMaterial::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $material = BuildingMaterial::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            if ($material->image) {
                $oldPath = public_path($material->image);
                if (File::exists($oldPath)) {
                    File::delete($oldPath);
                }
            }

            // Store new image
            $file = $request->file('image');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('uploads/materials'), $fileName);
            $validated['image'] = '/uploads/materials/' . $fileName;
        }

        $material->update($validated);

        return response()->json($material);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $material = BuildingMaterial::findOrFail($id);
        
        if ($material->image) {
            $path = public_path($material->image);
            if (File::exists($path)) {
                File::delete($path);
            }
        }
        
        $material->delete();

        return response()->json(null, 204);
    }
}
