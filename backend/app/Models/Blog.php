<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Blog extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'title',
        'content',
        'blog_image',
    ];

    /**
     * Get the full URL for the blog image.
     */
    public function getBlogImageAttribute($value)
    {
        if ($value && !str_starts_with($value, 'http')) {
            return asset($value);
        }
        return $value;
    }
}
