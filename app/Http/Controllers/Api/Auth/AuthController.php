<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{


    public function authententicated(Request $request)
    {

        return Auth::check()

            ? response(json_encode(['user' => json_encode(Auth()->user())]), 200)->header('Content-Type', 'application/json')

            : response(json_encode(['message' => "unAuthenticated"]), 401)->header('Content-Type', 'application/json');
    }

    public function login(LoginRequest $request)
    {
        $response = ["message" => "Invalid Email & Password"];

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $token = $request->user()->createToken($request->email)->plainTextToken;

            return  response(json_encode(['token' => $token, 'user' => json_encode(Auth()->user())]), 200);
        }

        return response(json_encode($response), 401)->header('Content-Type', 'application/json');
    }

    public function logout(Request $request)
    {

        $request->user()->currentAccessToken()->delete();

        return response('', 204)->header('Content-Type', 'application/json');
    }
}
