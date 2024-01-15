<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    //ユーザ認証処理追加
    static function auth(Request $request): string
    {
        $credentials = $request->only('email', 'password');
        //ユーザ認証
        if (Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->firstOrFail();
            // トークン作成して返す
            return $user->createToken('auth_token', ['*'], now()->addWeek())->plainTextToken;
        }
        return "";
    }
}
