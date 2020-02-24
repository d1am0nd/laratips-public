<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Resources\TagResource;

class TagController
{
    protected $tag;

    public function __construct(Tag $tag)
    {
        $this->tag = $tag;
    }

    public function index()
    {
        return TagResource::collection(
            $this->tag->get()
        );
    }

    public function show(int $id)
    {
        return new TagResource(
            $this->tag->findOrFail($id)
        );
    }
}
