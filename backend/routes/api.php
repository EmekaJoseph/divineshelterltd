<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VisitorController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\QuoteController;
use App\Http\Controllers\Api\ProjectController;

// Auth routes (public)
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
Route::post('/change-password', [AuthController::class, 'changePassword'])->middleware('auth:sanctum');

// Visitor tracking routes (public)
Route::post('/visitors', [VisitorController::class, 'store']);
Route::get('/visitors', [VisitorController::class, 'index'])->middleware('auth:sanctum');
Route::get('/visitors/{id}', [VisitorController::class, 'show'])->middleware('auth:sanctum');
Route::put('/visitors/{id}', [VisitorController::class, 'update'])->middleware('auth:sanctum');
Route::delete('/visitors/{id}', [VisitorController::class, 'destroy'])->middleware('auth:sanctum');

// Quote request routes (public)
Route::post('/quotes', [QuoteController::class, 'store']);

// Company routes (protected with Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('company', [CompanyController::class, 'show']);
    Route::put('company/{id}', [CompanyController::class, 'update']);

    // Blog routes (protected)
    Route::post('/blogs', [BlogController::class, 'store']);
    Route::post('/blogs/{id}', [BlogController::class, 'update']); // Using POST for file upload compatibility
    Route::delete('/blogs/{id}', [BlogController::class, 'destroy']);

    // Quote routes (protected - admin only)
    Route::get('/quotes', [QuoteController::class, 'index']);
    Route::get('/quotes/{id}', [QuoteController::class, 'show']);
    // Project routes (protected)
    Route::post('/projects', [ProjectController::class, 'store']);
    Route::post('/projects/{id}', [ProjectController::class, 'update']);
    Route::delete('/projects/{id}', [ProjectController::class, 'destroy']);
});

// Blog routes (public)
Route::get('/blogs', [BlogController::class, 'index']);
Route::get('/blogs/{id}', [BlogController::class, 'show']);
// Project routes (public)
Route::get('/projects', [ProjectController::class, 'index']);
Route::get('/projects/{id}', [ProjectController::class, 'show']);
