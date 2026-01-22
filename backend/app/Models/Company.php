<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Company extends Model
{
    use HasUuids;

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
