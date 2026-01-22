<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class BuildingMaterial extends Model
{
    use HasUuids;

    protected $fillable = ['name', 'description', 'category_id', 'image'];

    public function category()
    {
        return $this->belongsTo(BuildingMaterialCategory::class, 'category_id');
    }
}
