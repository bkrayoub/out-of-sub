<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ofllineRoom extends Model
{
    use HasFactory;

    protected $fillable = [
        'player',
    ];
}
