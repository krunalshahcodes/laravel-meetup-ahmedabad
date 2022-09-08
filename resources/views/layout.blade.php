<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    <title>@yield('title', config('app.name'))</title>
</head>

<body>
    <div class="bg-gray-100 min-h-screen">
        <div class="container mx-auto pt-8">
            <a href="{{ route('users') }}">
                <img class="" src="https://laravel.com/img/logomark.min.svg" alt="Laravel">
            </a>
        </div>
        @yield('content')
    </div>
</body>

</html>
