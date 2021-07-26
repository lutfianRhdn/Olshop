<?php

namespace Database\Seeders;

use App\Models\OrderStatus;
use Illuminate\Database\Seeder;

class OrderStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $statusName = [
            'on the way','arrived','packageing'
        ];
        foreach ($statusName as $status){
            OrderStatus::create([
                'name'=>$status
            ]);
        }
    }
}
