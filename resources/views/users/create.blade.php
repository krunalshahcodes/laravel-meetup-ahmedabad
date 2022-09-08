@extends('layout')
@section('title', 'Create User - ' . config('app.name'))

@section('content')
    <div class="container max-w-5xl mx-auto py-8">
        <h1 class="text-2xl font-semibold mb-2">Create User</h1>
        <p class="text-sm text-gray-500 mb-8">Add new user in your company.</p>
        <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="{{ route('user.store') }}" method="POST">
                    @csrf
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="first_name" class="block text-sm font-medium text-gray-700">First
                                name</label>
                            <input type="text" name="first_name" id="first_name" autocomplete="given-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" name="last_name" id="last_name" autocomplete="family-name"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                            <label for="email" class="block text-sm font-medium text-gray-700">Email
                                address</label>
                            <input type="text" name="email" id="email" autocomplete="email"
                                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
                            <select id="department" name="department" autocomplete="department-name"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Software</option>
                                <option>Design</option>
                                <option>Management</option>
                                <option>Marketing</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                            <select id="title" name="title" autocomplete="title-name"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Full Timer</option>
                                <option>Part Timer</option>
                                <option>Freelancer</option>
                            </select>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                            <select id="role" name="role" autocomplete="role-name"
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option>Owner</option>
                                <option>Admin</option>
                                <option>Member</option>
                            </select>
                        </div>
                    </div>
                    @if ($errors->any())
                        <ul class="mt-4 bg-red-50 rounded p-4">
                            @foreach ($errors->all() as $error)
                                <li class="text-sm">- {{ $error }}</li>
                            @endforeach
                        </ul>
                    @endif
                    <div class="flex justify-start mt-4">
                        <button type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                        </button>
                        <a href="{{ route('users') }}">
                            <button type="button"
                                class="ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Cancel
                            </button>
                        </a>
                    </div>
            </div>

            </form>
        </div>
    </div>
@endsection
