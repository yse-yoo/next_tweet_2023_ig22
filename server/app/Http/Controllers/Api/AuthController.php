<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function auth(Request $request)
    {
        try {
            if ($token = User::auth($request)) {
                // 認証成功時にアクセストークンをレスポンス
                $data = ['access_token' => $token, 'token_type' => 'Bearer',];
            } else {
                // 認証失敗でエラーメッセージ
                $data = ['error' => ['auth' => 'email or password error.']];
            }
            // JSONで結果を返す
            return response()->json($data);
        } catch (Exception $e) {
            return response()->json(['error' => ['auth' => 'Server error']], 500);
        }
    }

    public function authForSNS(Request $request, string $provider)
    {
        //TODO: Provider
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make(Str::random(10)),
            ]);
        }
        if ($user) {
            $user->access_token = $user->createToken('auth_token', ['*'], now()->addWeek())->plainTextToken;
            return response()->json(['user' => $user]);
        } else {
            return response()->json(['error' => ['message' => 'invalid regist']]);
        }
    }
}
