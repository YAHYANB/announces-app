<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announce extends Model
{
    use HasFactory;
    protected $fillable = ['user_id','title','address','num_rooms','num_bathrooms','space','price','type','city','description'];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
