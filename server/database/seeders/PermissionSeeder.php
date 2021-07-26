<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'order' , 'StatusOrder', 'product', 'store', 'role', 'category'
        ];
        $actions = [
            'view', 'create', 'update', 'delete', 'show'
        ];
        foreach ($permissions as $permission) {
            foreach ($actions as $action) {
                \App\Models\Permission::create(['name' => "$permission.$action", 'guard_name' => 'api']);
            }
        }
    }
}
