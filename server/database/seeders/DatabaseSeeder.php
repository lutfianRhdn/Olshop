<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(PermissionSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        \App\Models\Category::factory(10)->create();
        $this->call(OrderStatusSeeder::class);
        \App\Models\Store::factory(10)->create();
        \App\Models\Product::factory(100)->create();
        \App\Models\Image::factory(10)->create();
        \App\Models\Order::factory(10)->create();
    }
}
