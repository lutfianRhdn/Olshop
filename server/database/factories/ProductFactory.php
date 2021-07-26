<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'store_id' => \App\Models\Store::all()->random()->id,
            'category_id' => \App\Models\Category::all()->random()->id,
            'price' => $this->faker->randomDigit() * 10000,
            'description' => $this->faker->realText()
        ];
    }
}
