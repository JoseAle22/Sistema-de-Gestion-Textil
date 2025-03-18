<?php
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
// Rutas de la API
Route::post('/verify-token', [AuthController::class, 'verifyToken']);
Route::post('/logout', [AuthController::class, 'logout']);