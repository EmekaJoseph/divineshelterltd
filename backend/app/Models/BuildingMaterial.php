<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuildingMaterial extends Model
{
    protected $fillable = ['name', 'description', 'category_id', 'image'];

    public function category()
    {
        return $this->belongsTo(BuildingMaterialCategory::class, 'category_id');
    }
}
