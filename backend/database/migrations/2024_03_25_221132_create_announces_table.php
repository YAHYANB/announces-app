<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('announces', function (Blueprint $table) {
            $table->id('announce_id');
            $table->unsignedBigInteger('user_id');
            $table->string('title', 255);
            $table->text('address');
            $table->integer('num_rooms');
            $table->integer('num_bathrooms');
            $table->integer('space');
            $table->decimal('price', 10, 2);
            $table->enum('type', ['house', 'apartment', 'villa']);
            $table->string('city', 30);
            $table->text('description');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));

            $table->foreign('user_id')->references('user_id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('announces');
    }
};
