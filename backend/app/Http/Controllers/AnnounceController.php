<?php

namespace App\Http\Controllers;

use App\Models\Announce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnnounceController extends Controller
{

    public function index(){
        $announces = Announce::all();
        return response()->json(['announces' => $announces, 'status' => 200 ]);
    }
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => ['required', 'max:255'],
            'address' => ['required'],
            'num_rooms' => ['required'],
            'num_bathrooms' => ['required'],
            'space' => ['required'],
            'price' => ['required'],
            'type' => ['required', 'in:house, apartment, villa'],
            'city' => ['required', 'max:30'],
            'description' => ['required'],
        ]);

        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(), 'status' => 401]);
        }

        Announce::create([
            'title' => $request->title,
            'address' => $request->address,
            'num_rooms' => $request->num_rooms,
            'num_bathrooms' => $request->num_bathrooms,
            'space' => $request->space,
            'price' => $request->price,
            'type' => $request->type,
            'city' => $request->city,
            'description' => $request->description,
        ]);

        return response()->json(['message' => 'The announce was created successfully', 'status' => 201]);
    }

    public function show(Announce $announce)
    {
        if (!$announce) {
            return response()->json(['message' => 'announce does not found', 'status' => 404]);
        }
        return response()->json(['announce' => $announce, 'status' => 200]);
    }

    public function update(Request $request, Announce $announce)
    {
        if (!$announce) {
            return response()->json(['message' => 'announce does not found', 'status' => 404]);
        }

        $validate = Validator::make($request->all(), [
            'title' => ['required', 'max:255'],
            'address' => ['required'],
            'num_rooms' => ['required'],
            'num_bathrooms' => ['required'],
            'space' => ['required'],
            'price' => ['required'],
            'type' => ['required', 'in:house, apartment, villa'],
            'city' => ['required', 'max:30'],
            'description' => ['required'],
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(), 'status' => 401]);
        }

        $announce->update($request->all());
        return response()->json(['message' => 'The announce was updated successfully', 'status' => 200]);
    }

    public function destroy(Announce $announce)
    {
        if (!$announce) {
            return response()->json(['message' => 'announce does not found', 'status' => 404]);
        }

        $announce->delete();
        return response()->json(['message' => 'The announce was deleted successfully', 'status' => 200]);
    }
}
