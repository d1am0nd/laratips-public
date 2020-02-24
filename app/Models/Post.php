<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use Traits\Taggable;

	protected $casts = [
		'published_at' => 'datetime',
	];

    public function scopePublished($q)
    {
    	return $q->where('published_at', '<', now());
    }

    public function scopeLatest($q, $column = 'published_at')
    {
        return $q->latest($column);
    }
}
