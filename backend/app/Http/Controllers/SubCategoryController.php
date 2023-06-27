<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\subCategory;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    public function index($id) {
        $data = subCategory::where('category_id', 'like', '%'.$id.'%')->get();
        return response($data);
    }
}
