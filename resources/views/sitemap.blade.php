<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url> <loc>{{ url('/') }}</loc> <priority>0.9</priority> </url>
@foreach ($posts as $post)
<url> <loc>{{ url("/posts/$post->id-$post->slug") }}</loc> <priority>0.8</priority> </url>
@endforeach
@foreach ($tags as $tag)
<url> <loc>{{ url("/tags/$tag->id-$tag->slug") }}</loc> <priority>0.3</priority> </url>
@endforeach
</urlset>
