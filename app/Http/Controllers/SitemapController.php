<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Post;

class SitemapController
{
    public function index()
    {
        return response()
            ->view('sitemap', [
                'tags' => Tag::get(),
                'posts' => Post::published()->get(),
            ])
            ->header('Content-Type', 'text/xml');
    }
}
