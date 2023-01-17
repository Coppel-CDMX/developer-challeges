<?php

namespace App\Http\Controllers;

use App\Models\TaskStatus;
use Illuminate\Http\Request;

class TasksStatusesController extends Controller
{
    public function index(Request $request)
    {
        $statuses = TaskStatus::get();

        return response()->json($statuses);
    }
}
