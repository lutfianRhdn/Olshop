<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\Api\AuthController::class, 'login']);
Route::post('register', [App\Http\Controllers\Api\AuthController::class, 'register']);

Route::apiResource('/category', App\Http\Controllers\CategoryController::class);
Route::apiResource('/product', App\Http\Controllers\ProductController::class);

Route::middleware(['auth:sanctum'])->group(function () {

    Route::apiResource('/store', App\Http\Controllers\StoreController::class);
    Route::apiResource('/order', App\Http\Controllers\OrderController::class);
    Route::apiResource('/image', App\Http\Controllers\ImageController::class);
    Route::apiResource('/status', App\Http\Controllers\OrderStatusController::class);
    Route::apiResource('/user', App\Http\Controllers\UserController::class);
    Route::apiResource('/role', App\Http\Controllers\RoleController::class);

    Route::post('logout', [App\Http\Controllers\Api\AuthController::class, 'logout']);
});
