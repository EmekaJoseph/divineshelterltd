<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Visitor extends Model
{
    use HasUuids;

    protected $fillable = [
        'ip_address',
        'user_agent',
        'page_url',
        'referrer',
        'device_type',
        'browser',
        'operating_system',
        'country',
        'city',
    ];
}
