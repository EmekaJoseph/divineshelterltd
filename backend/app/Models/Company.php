<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'company';

    protected $fillable = [
        'name',
        'description',
        'phone',
        'email',
        'facebook',
        'instagram',
        'whatsapp',
        'twitter',
        'address',
    ];
}
