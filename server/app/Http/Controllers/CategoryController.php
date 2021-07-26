<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    const MODEL = 'App\Models\Category';
    const RESOURCE = 'App\Http\Resources\CategoryResource';

    use \App\Http\Traits\ApiTraits;
}
