<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends \Illuminate\Foundation\Auth\User
{
    use HasFactory, HasApiTokens;
    
    protected $fillable = [
        'name',
        'email',
        'password',
    ];
}
