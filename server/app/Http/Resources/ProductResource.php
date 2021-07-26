<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'price' => $this->price,
            'description' => $this->description,
            'category' => (new CategoryResource($this->category)),
            'store' => [
                'id' => $this->store->id,
                'name' => $this->store->name,
                'image' => $this->store->img_path,
            ],
            'images' => (ImageResource::collection($this->images))
            // 'store' => (new StoreResource($this->store)),

        ];
    }
}
