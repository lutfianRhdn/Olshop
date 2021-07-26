<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    const MODEL = 'App\Models\Image';
    const RESOURCE = 'App\Http\Resources\ImageResource';
    use \App\Http\Traits\ApiTraits;
}
