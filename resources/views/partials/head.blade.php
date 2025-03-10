<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="turbo-cache-control" content="no-preview">

<title>{{ isset($title) ? "Therapetico - $title" : 'Therapetico' }}</title>

<style>
    [x-cloak] { display: none !important; }
</style>

@vite(['resources/css/app.css', 'resources/js/app.js'])
@livewireStyles
