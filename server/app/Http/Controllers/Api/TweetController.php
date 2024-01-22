<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\TweetRequest;
use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    //データ取得
    function get()
    {
        //「tweets」テーブルのレコードをすべて取得
        // SELECT * FROM tweets;
        // SELECT * FROM tweets JOIN users ON users.id = tweets.user_id ORDER BY created_at DESC LIMIT 25;
        $tweets = Tweet::with('user')
            ->orderBy('created_at', 'DESC')
            ->limit(25)
            ->get();
        // JSONでレスポンス
        return response()->json($tweets);
    }

    //データ投稿
    function add(TweetRequest $request)
    {
        //現在、認証しているユーザ
        $user = $request->user();
        if ($user && $user->id == $request->user_id) {
            $tweet = Tweet::create($request->all());
            return response()->json($tweet);
        } else {
            return response()->json(['error' => 'anothor user post']);
        }
    }
}
