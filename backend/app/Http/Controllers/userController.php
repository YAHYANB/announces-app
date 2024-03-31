<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class userController extends Controller
{
    public function show(User $user)
    {
        return response()->json(['user' => $user, 'status' => 200]);
    }

    public function update(Request $request, string $id)
    {
        $validate = Validator::make($request->all(), [
            'username' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'unique:users,email'],
            'phone_num' => ['required'],
            'password' => ['required'],
            'city' => ['required', 'max:30'],
            'profile_image' => ['image']
        ]);
        if ($validate->fails()) {
            return response()->json(['errors' => $validate->errors(), 'status' => 401]);
        }
        if ($request->hasFile($request->profile_image)) {
            $imageName = uniqid() . '.' . $request->profile_image->extension();
            $request->profile_image->move(public_path('profiles'), $imageName);
        }
        User::where('id', $id)->update([
            'username' => $request->username,
            'email' => $request->email,
            'phone_num' => $request->phone_num,
            'password' => $request->password,
            'city' => $request->city,
            'profile_image' => $imageName
        ]);
        return response()->json(['message' => 'Profile updated successfully', 'status' => 200]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
