@props(['title' => null])

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ isset($title) ? "Test - $title" : 'Test Page' }}</title>

    <style>
        [x-cloak] { display: none !important; }
    </style>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body class="font-sans antialiased min-h-screen">
    <!-- Main content without header/footer -->
    <main class="flex-1 w-full">
        {{ $slot }}
    </main>

    @livewireScripts
</body>
</html>
