<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => Carbon::now(),
        ]);
        $admin->assignRole('admin');
        $user = User::create([
            'name' => 'user',
            'email' => 'user@admin.com',
            'password' => Hash::make('user123'),
            'email_verified_at' => Carbon::now()
        ]);
        $user->assignRole('user');
    }
}
