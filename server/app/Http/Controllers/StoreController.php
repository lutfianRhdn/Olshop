<?php

namespace App\Http\Controllers;

use App\Models\Store;
use Illuminate\Http\Request;

class StoreController extends Controller
{
    const MODEL = 'App\Models\Store';
    const RESOURCE = 'App\Http\Resources\StoreResource';

    use \App\Http\Traits\ApiTraits;
}
