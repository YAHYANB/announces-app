<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('announce_images', function (Blueprint $table) {
            $table->id('image_id');
            $table->unsignedBigInteger('announce_id');
            $table->string('image_1', 100)->unique();
            $table->string('image_2', 100)->unique();
            $table->string('image_3', 100)->unique();
            $table->string('image_4', 100)->unique();
            $table->string('image_5', 100)->unique();
            $table->string('image_6', 100)->unique();
            $table->string('image_7', 100)->unique();
            $table->string('image_8', 100)->unique();
    
            $table->foreign('announce_id')->references('announce_id')->on('announces')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('announce_images');
    }
};
