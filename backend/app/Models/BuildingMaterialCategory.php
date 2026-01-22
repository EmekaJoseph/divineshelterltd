<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class BuildingMaterialCategory extends Model
{
    use HasUuids;

    protected $fillable = ['name', 'slug'];

    public function buildingMaterials()
    {
        return $this->hasMany(BuildingMaterial::class, 'category_id');
    }
}
