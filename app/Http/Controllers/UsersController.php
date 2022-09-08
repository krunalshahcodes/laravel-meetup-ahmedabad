<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        $users = User::orderBy('id', 'desc')->get();
        // return view('users/index', compact('users'));
        return Inertia::render('Users/List', [
            'users' => $users
        ]);
    }

    public function create()
    {
        // return view('users/create');
        return Inertia::render('Users/Create');
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors());
        }

        User::create($request->all());

        return Redirect::route('users')->with('success', 'User has been created successfully');
    }
}
