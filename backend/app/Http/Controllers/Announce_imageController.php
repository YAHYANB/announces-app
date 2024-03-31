<?php

namespace App\Http\Controllers;

use App\Models\Announce_image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Announce_imageController extends Controller
{
    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'announce_id' => ['required'],
            'image_1' => ['required', 'image'],
            'image_2' => ['required', 'image'],
            'image_3' => ['required', 'image'],
            'image_4' => ['required', 'image'],
            'image_5' => ['image'],
            'image_6' => ['image'],
            'image_7' => ['image'],
            'image_8' => ['image']
        ]);

        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(), 'status' => 401]);
        }

        $imageNames = [];
        $allImages = ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8'];
        foreach ($allImages as $imageName) {
            if ($request->hasFile($imageName)) {
                $image = $request->file($imageName);
                $imageName = uniqid() . '.' . $image->extension();
                $image->make(public_path('images'), $imageName);
                $imageNames[$imageName] = $imageName;
            }
        }
        Announce_image::create($imageNames);

        return response()->json(['message' => 'Announce images created successfully', 'status' => 201]);
    }

    public function show(Announce_image $announce_image)
    {
        if (!$announce_image) {
            return response()->json(['message' => 'Announce image not found', 'status' => 404]);
        }

        return response()->json(['announce_image' => $announce_image, 'status' => 200]);
    }

    public function update(Request $request, Announce_image $announce_image)
    {
        if (!$announce_image) {
            return response()->json(['message' => 'Announce image not found', 'status' => 404]);
        }

        $validate = Validator::make($request->all(), [
            'image_1' => ['image'],
            'image_2' => ['image'],
            'image_3' => ['image'],
            'image_4' => ['image'],
            'image_5' => ['image'],
            'image_6' => ['image'],
            'image_7' => ['image'],
            'image_8' => ['image']
        ]);

        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(), 'status' => 401]);
        }

        $allImages = ['image_1', 'image_2', 'image_3', 'image_4', 'image_5', 'image_6', 'image_7', 'image_8'];
        foreach ($allImages as $imageName) {
            if ($request->hasFile($imageName)) {
                $image = $request->file($imageName);
                $imageName = uniqid() . '.' . $image->extension();
                $image->move(public_path('images'), $imageName);
                $announce_image->$imageName = $imageName;
            }
        }

        $announce_image->save();

        return response()->json(['message' => 'Announce images updated successfully', 'status' => 200]);
    }


    public function destroy(Announce_image $announce_image)
    {
        if (!$announce_image) {
            return response()->json(['message' => 'Announce image not found', 'status' => 404]);
        }

        $announce_image->delete();

        return response()->json(['message' => 'Announce image deleted successfully', 'status' => 200]);
    }
}
