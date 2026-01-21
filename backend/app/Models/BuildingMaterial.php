<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuildingMaterial extends Model
{
    protected $fillable = ['name', 'description', 'category', 'image'];
}
