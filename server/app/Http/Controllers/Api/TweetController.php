<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tweet;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    //データ取得
    function get() : String {
        //「tweets」テーブルのデータをすべて取得
        // SELECT * FROM tweets;
        $tweets = Tweet::get();
        // JSONでレスポンス
        return response()->json($tweets);
    }
}
