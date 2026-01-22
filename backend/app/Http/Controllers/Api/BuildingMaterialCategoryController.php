<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BuildingMaterialCategory;
use Illuminate\Http\Request;

use Illuminate\Support\Str;

class BuildingMaterialCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(BuildingMaterialCategory::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:building_material_categories,name',
        ]);

        $validated['slug'] = Str::slug($validated['name']);

        $category = BuildingMaterialCategory::create($validated);

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(BuildingMaterialCategory $buildingMaterialCategory)
    {
        return response()->json($buildingMaterialCategory);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BuildingMaterialCategory $buildingMaterialCategory)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255|unique:building_material_categories,name,' . $buildingMaterialCategory->id,
        ]);

        if (isset($validated['name'])) {
            $validated['slug'] = Str::slug($validated['name']);
        }

        $buildingMaterialCategory->update($validated);

        return response()->json($buildingMaterialCategory);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BuildingMaterialCategory $buildingMaterialCategory)
    {
        $buildingMaterialCategory->delete();

        return response()->json(['message' => 'Category deleted successfully']);
    }
}
