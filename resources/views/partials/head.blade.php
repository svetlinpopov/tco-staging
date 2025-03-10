<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="turbo-cache-control" content="no-preview">

<title>{{ isset($title) ? "Therapetico - $title" : 'Therapetico' }}</title>

<!-- Alpine.js for interactive components -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<style>
    [x-cloak] { display: none !important; }
</style>

@vite(['resources/css/app.css', 'resources/js/app.js'])
@livewireStyles
