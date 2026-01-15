<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VisitorController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\AuthController;

// Auth routes (public)
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');

// Visitor tracking routes (public)
Route::post('/visitors', [VisitorController::class, 'store']);
Route::get('/visitors', [VisitorController::class, 'index'])->middleware('auth:sanctum');
Route::get('/visitors/{id}', [VisitorController::class, 'show'])->middleware('auth:sanctum');
Route::put('/visitors/{id}', [VisitorController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/visitors/{id}', [VisitorController::class, 'destroy'])->middleware('auth:sanctum');

// Company routes (protected with Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('company', [CompanyController::class, 'show']);
    Route::put('company/{id}', [CompanyController::class, 'update']);
});
