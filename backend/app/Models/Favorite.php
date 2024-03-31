<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;
    protected $fillable = ['announce_id'];

    public function announce(){
        return $this->belongsTo(Announce::class);
    }
}
