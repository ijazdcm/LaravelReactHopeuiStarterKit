<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=>'Saravana',
            'email'=>'admin@gmail.com',
            'password'=>Hash::make('1412'),
            'is_admin'=>1,
        ]);

        User::create([
            'name'=>'Saravana Sai',
            'email'=>'user@gmail.com',
            'password'=>Hash::make('1412'),
        ]);
    }
}
