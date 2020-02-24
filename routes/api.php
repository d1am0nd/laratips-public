<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'tags',
], function () {
    Route::get('/', 'TagController@index');
    Route::get('{id}', 'TagController@show');
});

Route::group([
    'prefix' => 'posts',
], function () {
    Route::get('/', 'PostController@index');
    Route::get('{id}', 'PostController@show');
});

Route::group([
    'prefix' => 'sitemap',
], function () {
    Route::get('index.xml', 'SitemapController@index');
});
