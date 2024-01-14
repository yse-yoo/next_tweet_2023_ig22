## GitHub
https://github.com/yse-yoo/next_tweet_2023_ig22

## API開発
- React&Next.js（フロントエンド）とLaravel（サーバーサイド・API）について
- Laravelプロジェクト作成
- DB設定
- APIプログラムの基本

## プロジェクト作成
1.「htdocs/」の中に「next_tweet」フォルダを作成

2.「next_tweet」を開く

3. Laravel「server」プロジェクト作成

```
composer create-project laravel/laravel server  
```

4. 新しいウィンドウで「server」プロジェクトを開く

```
code server
```

- codeコマンドで開く場合※Macでは設定が必要

5. Laravelサーバを起動する
```
php artisan serve
```

6. アプリ起動確認

http://localhost:8000/

## ログイン認証機能作成（Breeze）
1. Breezeのダウンロード

```
composer require laravel/breeze --dev   
```

2. Breezeのインストール
```
php artisan breeze:install blade  
```

3. トップページを確認し、「Login」「Register」リンクが表示されることを確認

## DB作成
1. XAMPPで、ApacheとMySQL起動

2. phpMyAdminにアクセスして「next_tweet」データベース作成

3. 「server」プロジェクトの「.env」でDB設定

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=next_tweet
DB_USERNAME=root
DB_PASSWORD=
```
- Mac（MAMP）の場合
```
DB_PASSWORD=root
```

■モデル作成
1. ターミナルでTweetモデル作成

```
php artisan make:model Tweet -m
```

2. 「tweets」マイグレーションプログラムを開く

database/migrations/xxxxxx_create_tweets_table.php

3. テーブル定義
- プログラムはGitHub参照

3. DBマイグレーション
```
php artisan migrate
```

4. app/Models/Tweet.php にカラム設定（Fillable）

## APIコントローラー作成
1. ターミナルでコントローラー「Api/TweetController」作成

```
php artisan make:controller Api/TweetController
```

2. ルーティング「routes/api.php」を設定

3. APIにアクセス

http://localhost:8000/api/tweet/get


## Validate処理
1. TweetRequest作成

```
php artisan make:request Api/TweetRequest
```

2. authorize() の戻り値を「true」

3. rules() で、バリデーションの設定

4. failedValidation() を追加して、APIアクセス時にエラーが発生した時のプログラムを追加

5. Api/TweetController.php の add() の引数に、作成した TweetRequest を指定


■API開発ツール「Postman」
1. Postmanのサイトにアクセス

https://www.postman.com/

2. 「Sign up for free」からGoogleアカウントでサインアップ

3. アカウント登録ができたら、PCアプリをダウンロード＆インストール

https://www.postman.com/downloads/

4. アプリが起動したら「Login」をクリックし、アカウントログイン

5. 学校のPCユーザとパスワード
ID: iggxx\ig
PW: ig

