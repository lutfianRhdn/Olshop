<?php

namespace App\Http\Controllers;

use App\Models\OrderStatus;
use Illuminate\Http\Request;

class OrderStatusController extends Controller
{
    const MODEL = 'App\Models\OrderStatus';
    const RESOURCE = 'App\Http\Resources\OrderStatusResource';
    use \App\Http\Traits\ApiTraits;
}
