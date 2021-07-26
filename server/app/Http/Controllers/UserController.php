<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    const MODEL = 'App\Models\User';
    const RESOURCE = 'App\Http\Resources\UserResource';
    use \App\Http\Traits\ApiTraits {
        update as protected parent_update;
    }
    public function update(User $user, Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'email' => [
                    'required',
                    'email',
                    function ($attribute, $value, $fail) use ($user) {
                        $exists = User::where('email', $value)->get();
                        if ($exists->count() > 0) {
                            if ($user->email !== $value) {
                                $fail($attribute . ' has already been taken.');
                            }
                        }
                    }
                ],
                'role' => 'required'
            ]);
            $user->update([
                'name' => $request->name,
                'email' => $request->email
            ]);
            $user->syncRoles($request->role);
            return $this->respond('done', $user);
        } catch (\Illuminate\Database\QueryException $exception) {
            $errorInfo = $exception->errorInfo;
            return $this->respond('error', $errorInfo);
        }
    }
}
