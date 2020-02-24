<?php

use App\Models\Tag;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Tag::whereNotNull('id')->delete();
        $this->call(TagSeeder::class);
    }
}
