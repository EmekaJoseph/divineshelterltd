<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Project extends Model
{
    use HasUuids;

    protected $fillable = ['title', 'location', 'image'];

    /**
     * Get the full URL for the project image.
     */
    public function getImageAttribute($value)
    {
        if ($value && !str_starts_with($value, 'http')) {
            return asset($value);
        }
        return $value;
    }
}
