<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    const DISPLAYED_COLUMNS = [
        'id',
        'title',
        'slug',
        'intro',
        'content',
        'published_at',
    ];

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
            'title' => $this->title,
            'slug' => $this->slug,
            'intro' => $this->intro,
            'content' => $this->content,
            'published_at' => $this->published_at ? $this->published_at->default() : null,
            'tags' => TagResource::collection($this->whenLoaded('tags')),
        ];
    }
}
