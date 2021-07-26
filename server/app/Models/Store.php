<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    public static $rules=[
        'name'=>'required|unique:stores,name',
        'user_id'=> 'required|exists:users,id',
        'description'=>'required',
        'img_path'=>'required|image|max:2048'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
