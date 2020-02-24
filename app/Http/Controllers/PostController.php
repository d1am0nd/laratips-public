<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
	protected $post;

	public function __construct(Post $post)
	{
		$this->post = $post;
	}

    public function index(Request $request)
    {
    	return PostResource::collection(
    		$this
    			->post
    			->select(PostResource::DISPLAYED_COLUMNS)
    			->published()
                ->with(['tags'])
                ->latest()
                ->when($request->input('tagIds'), function ($q, $ids) {
                    return $q->whereHas('tags', function ($q) use ($ids) {
                        return $q->whereIn('id', $ids);
                    });
                })
    			->paginate()
    	);
    }

    public function show(Request $request, int $id)
    {
        return new PostResource(
            $this
                ->post
                ->select(PostResource::DISPLAYED_COLUMNS)
                ->published()
                ->with(['tags'])
                ->latest()
                ->findOrFail($id)
        );
    }
}
