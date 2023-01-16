<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userAdmin = User::updateOrCreate(
            [
                'username' => 'admin',
                'email' => 'admin@todo.com'
            ],
            [
                'password' => Hash::make('Pass1234'),
                'fullname' => 'Administrador'
            ]
        );
    }
}
