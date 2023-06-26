<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OfflineRoomController;


Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('logout', 'App\Http\Controllers\Api\AuthController@logout');

});

Route::get('test', 'App\Http\Controllers\UserController@test');

Route::post('register', 'App\Http\Controllers\UserController@register');

Route::post('login', 'App\Http\Controllers\Api\AuthController@login');

Route::get('token', 'App\Http\Controllers\Api\AuthController@getToken');

/**offline room routes */

Route::get('offlinePlayers', 'App\Http\Controllers\OfflineRoomController@index');

Route::post('addOfflinePlayer', 'App\Http\Controllers\OfflineRoomController@addOfflinePlayer');

Route::delete('removePlayer/{id}', 'App\Http\Controllers\OfflineRoomController@removePlayer');


