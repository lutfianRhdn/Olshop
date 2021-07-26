<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoleController extends Controller
{
    const MODEL = '\App\Models\Role';
    const RESOURCE = '\App\Http\Resources\RoleResource';
    use \App\Http\Traits\ApiTraits;
}
