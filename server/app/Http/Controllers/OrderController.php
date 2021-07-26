<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    const MODEL = 'App\Models\Order';
    const RESOURCE = 'App\Http\Resources\OrderResource';
    use \App\Http\Traits\ApiTraits;
}
