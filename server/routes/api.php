<?php

use App\Http\Controllers\Api\TweetController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//ルーティングのURL：「/api/xxxx」
// TweetController
Route::get('tweet/get', [TweetController::class, 'get']);

// Token認証しているユーザのみ実行
Route::middleware('auth:sanctum')->group(function () {
    Route::post('tweet/add', [TweetController::class, 'add']);
});

// AuthController
Route::post('/auth', [AuthController::class, 'auth']);

// /api/user
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
