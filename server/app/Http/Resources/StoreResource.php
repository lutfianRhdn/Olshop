<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'img_path' => $this->img_path,
            'description' => $this->description,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'user'=>[
                'id'=>$this->user->id,
                'name' =>$this->user->name,
                'email'=>$this->user->email
            ],
            'products'=> $this->products->count()
            // 'user' => (new UserResource($this->user)
        ];
    }
}
