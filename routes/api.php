<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\TasksStatusesController;

Route::post('/signin', [UserController::class, 'authenticate']);
Route::post('/register', [UserController::class, 'register']);

Route::middleware(['jwt.verify'])
    ->group(function() {
        Route::post('user', [UserController::class, 'getAuthenticatedUser']);

        Route::prefix('tasks')
            ->controller(TasksController::class)
            ->group(function() {
                Route::get("/", "index");
                Route::get("{task_id}", "getOne");
                Route::post("/", "store");
                Route::put("{task_id}", "update");
                Route::delete("{task_id}", "delete");
            });

        Route::prefix('tasks-statuses')
            ->controller(TasksStatusesController::class)
            ->group(function() {
                Route::get("/", "index");
            });
    });
