<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Announce;

class Announce_image extends Model
{
    use HasFactory;
    protected $fillable = ['image_1','image_2','image_3','image_4','image_5','image_6','image_7','image_8'];

    public function announce(){
        return $this->belongsTo(Announce::class);
    }
}
