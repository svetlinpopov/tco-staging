@props(['title' => null])

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    @include('partials.head', ['title' => $title])
</head>
<body class="font-sans antialiased min-h-screen">
    <!-- Explicitly using an outer container with normal overflow behavior -->
    <div class="flex min-h-screen w-full flex-col">
        <!-- Include the header as an overlay -->
        @include('components.header.header-main')

        <!-- Main content slot -->
        <main class="flex-1 w-full">
            {{ $slot }}
        </main>

        <!-- Include the footer - now positioned after all content -->
        @include('components.footer.footer-main')
    </div>

    @livewireScripts
</body>
</html>
