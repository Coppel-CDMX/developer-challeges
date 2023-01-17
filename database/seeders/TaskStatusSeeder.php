<?php

namespace Database\Seeders;

use App\Models\TaskStatus;
use Illuminate\Database\Seeder;

class TaskStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $todo = TaskStatus::updateOrCreate(
            [
                'symbol' => 'todo'
            ],
            [
                'name' => 'Por hacer'
            ]
        );

        $inProgress = TaskStatus::updateOrCreate(
            [
                'symbol' => 'in_progress'
            ],
            [
                'name' => 'En proceso'
            ]
        );

        $done = TaskStatus::updateOrCreate(
            [
                'symbol' => 'done'
            ],
            [
                'name' => 'Finalizada'
            ]
        );
    }
}
