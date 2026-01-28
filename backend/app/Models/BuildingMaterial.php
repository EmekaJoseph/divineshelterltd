<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class BuildingMaterial extends Model
{
    use HasUuids;

    protected $fillable = ['name', 'description', 'category_id', 'image'];

    /**
     * Get the full URL for the material image.
     */
    public function getImageAttribute($value)
    {
        if ($value && !str_starts_with($value, 'http')) {
            return asset($value);
        }
        return $value;
    }

    public function category()
    {
        return $this->belongsTo(BuildingMaterialCategory::class, 'category_id');
    }
}
