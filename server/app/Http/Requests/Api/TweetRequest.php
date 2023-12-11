<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class TweetRequest extends FormRequest
{
    public function authorize(): bool
    {
        // return false;
        return true;
    }

    public function rules(): array
    {
        return [
            'user_id' => [
                'required',
                'integer',
                Rule::exists('users', 'id'),
            ],
            'message' => ['required'],
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $res = response()->json([
            'status' => 400,
            'errors' => $validator->errors(),
        ],400);
        throw new HttpResponseException($res);
    }
}
