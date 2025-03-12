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

<title>{{ isset($title) ? "Therapetico - $title" : 'Therapetico' }}</title>

<style>
    [x-cloak] { display: none !important; }
</style>
<style>
    /* Temporary styling override - REMOVE BEFORE PRODUCTION */
    #mobile-menu {
        display: flex !important;
        opacity: 1 !important;
    }
</style>

@vite(['resources/css/app.css', 'resources/js/app.js'])
@livewireStyles
