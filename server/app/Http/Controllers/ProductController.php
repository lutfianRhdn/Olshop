<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    const MODEL = 'App\Models\Product';
    const RESOURCE = 'App\Http\Resources\ProductResource';
    use \App\Http\Traits\ApiTraits;
}
