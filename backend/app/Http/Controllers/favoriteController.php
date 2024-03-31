<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use Illuminate\Http\Request;

class AnnounceImageController extends Controller
{
    public function index()
    {
        $favorites = Favorite::all();
        return response()->json(['favorites' => $favorites, 'status' => 200]);
    }

    public function store(Request $request)
    {
        $request->validate(['announce_id' => 'required']);

        $favorite = Favorite::create([
            'announce_id' => $request->announce_id
        ]);

        return response()->json(['favorite' => $favorite, 'message' => 'Favorite added successfully', 'status' => 201]);
    }

    public function show(Favorite $favorite)
    {
        if (!$favorite) {
            return response()->json(['message' => 'Favorite not found', 'status' => 404]);
        }

        return response()->json(['favorite' => $favorite, 'status' => 200]);
    }
    public function destroy(Favorite $favorite)
    {

        if (!$favorite) {
            return response()->json(['message' => 'Favorite not found', 'status' => 404]);
        }

        $favorite->delete();

        return response()->json(['message' => 'Favorite deleted successfully', 'status' => 200]);
    }
}
