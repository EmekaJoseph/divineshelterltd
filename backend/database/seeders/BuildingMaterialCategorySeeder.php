<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\BuildingMaterialCategory;
use Illuminate\Support\Str;

class BuildingMaterialCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Doors and Windows',
            'Hydraform Bricks',
            'PVC ceilings',
            'Tiles',
            'Roofing Materials',
            'Finishing Materials',
        ];

        foreach ($categories as $category) {
            BuildingMaterialCategory::firstOrCreate(
                ['name' => $category],
                ['slug' => Str::slug($category)]
            );
        }
    }
}
