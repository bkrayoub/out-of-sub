<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\category;
use App\Models\subCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index() {
        //$data = category::all();
        $data = category::all()->first(); //for demo version of game
        return response($data);
    }
}
