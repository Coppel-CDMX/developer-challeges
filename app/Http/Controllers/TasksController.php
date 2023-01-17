<?php

namespace App\Http\Controllers;

use DB;
use Log;
use Carbon\Carbon;
use App\Models\Task;
use App\Models\TaskStatus;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TasksController extends Controller
{
    public function index(Request $request)
    {
        $tasks = Task::query();

        if ($keyword = $request->input('keyword', null)) {
            $tasks->where('title', 'like', '%'.$keyword.'%')
                ->orWhere('description', 'like', '%'.$keyword.'%');
        }

        if ($periodStart = $request->input('period_start', null)) {
            $tasks->whereDate('created_at', '>=', Carbon::parse($periodStart));
        }

        if ($periodEnd = $request->input('period_end', null)) {
            $tasks->whereDate('created_at', '<=', Carbon::parse($periodEnd));
        }

        if ($statusId = $request->input('status_id', null)) {
            $tasks->where('status_id', $statusId);
        }

        $tasks = $tasks->with(['status'])
            ->paginate(15);

        return response()->json($tasks);
    }

    public function getOne($task_id)
    {
        $task = Task::findOrFail($task_id);

        return response()->json($task);
    }

    public function store(Request $request)
    {
        $messages = [
            'title.required' => "Se debe colocar un título para la tarea.",
            'description.required' => "Se debe colocar una descripción.",
            'priority.required' => "Se debe seleccionar una prioridad.",
            'status.required' => "Se debe seleccionar un estatus."
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:100',
                'description' => 'required|string|max:150',
                'priority' => 'required|integer',
                'status' => 'required'
            ],
            $messages
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->toJson()], 400);
        }

        DB::beginTransaction();

        try {
            $user = User::findOrFail($request->user()->id);
            $status = TaskStatus::findOrFail($request->input('status.id'));

            $newTask = Task::create(
                [
                    'title' => $request->input('title'),
                    'description' => $request->input('description'),
                    'priority' => $request->input('priority'),
                    'status_id' => $status->id,
                    'user_id' => $user->id
                ]
            );

            $newTask->save();

            DB::commit();

            return response()->json($newTask);
        } catch(\Exception $e) {
            Log::info($e);

            DB::rollBack();

            $errors = [
                "Ocurrió un error al intentar crear el registro. {$e->getMessage()}"
            ];

            return response()->json(compact('errors'), 500);
        }
    }

    public function update($task_id, Request $request)
    {
        $messages = [
            'title.required' => "Se debe colocar un título para la tarea.",
            'description.required' => "Se debe colocar una descripción.",
            'priority.required' => "Se debe seleccionar una prioridad.",
            'status.required' => "Se debe seleccionar un estatus."
        ];

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:100',
                'description' => 'required|string|max:150',
                'priority' => 'required|integer',
                'status' => 'required'
            ],
            $messages
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->toJson()], 400);
        }

        DB::beginTransaction();

        try {
            $status = TaskStatus::findOrFail($request->input('status.id'));
            $taskToUpdate = Task::findOrFail($task_id);
            $taskToUpdate->title = $request->input('title');
            $taskToUpdate->description = $request->input('description');
            $taskToUpdate->status_id = $status->id;
            $taskToUpdate->priority = $request->input('priority');
            $taskToUpdate->save();

            DB::commit();

            return response()->json($taskToUpdate);
        } catch(\Exception $e) {
            Log::info($e);

            DB::rollBack();

            $errors = [
                "Ocurrió un error al intentar actualizar el registro. {$e->getMessage()}"
            ];

            return response()->json(compact('errors'), 500);
        }
    }

    public function delete($task_id)
    {
        $taskToDelete = Task::findOrFail($task_id)->delete();

        return response()->json($taskToDelete);
    }
}
