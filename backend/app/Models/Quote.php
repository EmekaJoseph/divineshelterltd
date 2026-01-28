<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Quote extends Model
{
    use HasUuids;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'project_details',
        'image_path'
    ];

    /**
     * Get the full URL for the quote attachment.
     */
    public function getImagePathAttribute($value)
    {
        if ($value && !str_starts_with($value, 'http')) {
            return asset($value);
        }
        return $value;
    }
}
