<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskStatus extends Model
{
    use HasFactory;

    protected $table = "tasks_statuses";

    protected $fillable = [
        'symbol',
        'name'
    ];
}