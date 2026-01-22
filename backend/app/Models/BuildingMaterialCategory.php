<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuildingMaterialCategory extends Model
{
    protected $fillable = ['name', 'slug'];

    public function buildingMaterials()
    {
        return $this->hasMany(BuildingMaterial::class, 'category_id');
    }
}
