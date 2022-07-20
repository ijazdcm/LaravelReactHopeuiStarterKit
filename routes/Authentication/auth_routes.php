<?php

use App\Http\Controllers\Api\Auth\AuthController;
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

//authentication routes

Route::post('admin-login',[AuthController::class,'login']);



Route::group(["prefix"=>"admin","middleware"=>"auth:sanctum"],function ()
{
    Route::get('is-authententicated',[AuthController::class,'authententicated']);
    Route::post('admin-logout',[AuthController::class,'logout']);
});
