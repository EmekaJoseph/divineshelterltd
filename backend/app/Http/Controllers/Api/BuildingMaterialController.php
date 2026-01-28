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
        $materials = BuildingMaterial::with('category')->latest()->get()->map(function ($material) {
            $material->category_name = $material->category ? $material->category->name : null;
            $data = $material->toArray();
            $data['category'] = $data['category_name'];
            unset($data['category_name']);
            return $data;
        });

        return response()->json($materials);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|uuid|exists:building_material_categories,id',
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
        $material = BuildingMaterial::with('category')->findOrFail($id);
        $data = $material->toArray();
        $data['category'] = $material->category ? $material->category->name : null;
        
        return response()->json($data);
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
            'category_id' => 'required|uuid|exists:building_material_categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image
            $oldImage = $material->getRawOriginal('image');
            if ($oldImage) {
                $oldPath = public_path($oldImage);
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
        
        $image = $material->getRawOriginal('image');
        if ($image) {
            $path = public_path($image);
            if (File::exists($path)) {
                File::delete($path);
            }
        }
        
        $material->delete();

        return response()->json(null, 204);
    }
}
