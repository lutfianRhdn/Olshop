<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminRole = Role::create([
            'name'=>'admin',
            'guard_name'=>'api'
        ]);
        $userRole = Role::create([
            'name'=>'user',
            'guard_name'=>'api'
        ]);
        $salesRole = Role::create([
            'name'=>'sales',
            'guard_name'=>'api'
        ]);
        $adminRole->givePermissionTo(\App\Models\Permission::all());
        $userRole->givePermissionTo(['product.view','product.show','order.create','order.update','store.create','store.show']);
        $salesRole->givePermissionTo(['product.view','product.show','product.update','product.delete','order.create','order.delete','order.update','store.update','store.delete','store.show']);
        
    }
}
