<?php

use App\Http\Controllers\Announce_imageController;
use App\Http\Controllers\AnnounceController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'Register']);
Route::post('/login', [AuthController::class, 'Login']);
Route::post('/logout', [AuthController::class, 'Logout'])->middleware('auth:sanctum');

Route::prefix('user')->group(function () {
    Route::get('/{id}', [Announce_imageController::class, 'show']);
    Route::put('/{id}', [Announce_imageController::class, 'update']);
    // Route::delete('/{id}', [Announce_imageController::class, 'destroy']);
})->middleware('auth:sanctum');

Route::prefix('announce-images')->group(function () {
    Route::post('/add', [Announce_imageController::class, 'store']);
    Route::get('/{id}', [Announce_imageController::class, 'show']);
    Route::put('/{id}', [Announce_imageController::class, 'update']);
    Route::delete('/{id}', [Announce_imageController::class, 'destroy']);
})->middleware('auth:sanctum');

Route::prefix('announce')->group(function () {
    Route::post('/add', [AnnounceController::class, 'store']);
    Route::get('/{id}', [AnnounceController::class, 'show']);
    Route::put('/{id}', [AnnounceController::class, 'update']);
    Route::delete('/{id}', [AnnounceController::class, 'destroy']);
})->middleware('auth:sanctum');

Route::prefix('favorite')->group(function () {
    Route::post('/', [Announce_imageController::class, 'store']);
    Route::post('/add', [Announce_imageController::class, 'store']);
    Route::get('/{id}', [Announce_imageController::class, 'show']);
    Route::put('/{id}', [Announce_imageController::class, 'update']);
    Route::delete('/{id}', [Announce_imageController::class, 'destroy']);
})->middleware('auth:sanctum');
