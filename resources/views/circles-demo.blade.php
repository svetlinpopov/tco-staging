<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="turbo-cache-control" content="no-preview">

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon/favicon-16x16.png') }}">
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <link rel="manifest" href="{{ asset('site.webmanifest') }}">
    <link rel="mask-icon" href="{{ asset('favicon/safari-pinned-tab.svg') }}" color="#b3998a">
    <meta name="msapplication-config" content="{{ asset('browserconfig.xml') }}">
    <meta name="msapplication-TileColor" content="#b3998a">
    <meta name="theme-color" content="#ffffff">

    <title>Therapetico - Circles Demo</title>

    <style>
        [x-cloak] { display: none !important; }
    </style>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body class="font-sans antialiased min-h-screen bg-white">
    <!-- Simple container without header, footer, or side navigation -->
    <div class="flex min-h-screen w-full flex-col">
        <!-- Main content -->
        <main class="flex-1 w-full">
            <!-- Section-Hero with floating SVG animation -->
            <section id="section1" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200 relative">
                <!-- Floating SVG container - fixed to viewport -->
                <div class="floating-svg-container">
                    <div class="floating-svg-wrapper">
                        <img src="{{ Vite::asset('resources/img/circle-lines.svg') }}" alt="" class="floating-svg">
                    </div>
                </div>

                <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16 relative z-2">
                    <!-- Empty container - only background visible with floating SVG -->
                </div>
            </section>
        </main>
    </div>

    @livewireScripts
</body>
</html>
