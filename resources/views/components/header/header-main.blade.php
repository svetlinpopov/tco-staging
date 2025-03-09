<header class="fixed top-0 left-0 w-full z-10 text-white transition-all duration-500 rounded-b-2xl">
    <div class="w-full px-8 py-6 md:px-12 lg:px-12 transition-all duration-500 header-padding">
        <div class="mx-auto flex items-center justify-between w-full">
            <!-- Logo -->
            <a href="/" wire:navigate class="flex items-center text-base">
                <img src="{{ Vite::asset('resources/img/tco-logo.svg') }}" alt="App Logo" class="h-[25px] w-auto">
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center">
                <x-ui.nav-item href="#" wire:navigate :active="request()->routeIs('clients')">
                    {{ __('navlinks.clients') }}
                </x-ui.nav-item>
                <x-ui.nav-item href="#" wire:navigate :active="request()->routeIs('therapists')">
                    {{ __('navlinks.therapists') }}
                </x-ui.nav-item>
                <x-ui.nav-item href="#" wire:navigate :active="request()->routeIs('companies')">
                    {{ __('navlinks.companies') }}
                </x-ui.nav-item>
                <x-ui.nav-item href="{{ route('about') }}" wire:navigate :active="request()->routeIs('about')">
                    {{ __('navlinks.about') }}
                </x-ui.nav-item>
                <x-ui.nav-item href="#" wire:navigate :active="request()->routeIs('contact')">
                    {{ __('navlinks.contact') }}
                </x-ui.nav-item>
            </nav>

            <div class="flex items-center space-x-4">
                <!-- Language Switcher -->
                <livewire:language-switcher />

                <!-- CTA Button -->
                <x-ui.button variant="header" href="#" wire:navigate class="hidden sm:inline-flex">
                    {{ __('navlinks.ctamatched') }}
                </x-ui.button>

                <!-- Mobile menu button -->
                <button id="mobile-menu-button" class="lg:hidden p-2 rounded-md hover:bg-white/20 focus:outline-none text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Navigation Menu (hidden by default) -->
    <div id="mobile-menu" class="hidden lg:hidden w-full">
        <div class="px-4 pt-2 pb-3 space-y-1 border-t border-white/20 bg-del-rio">
            <a href="#" wire:navigate class="{{ request()->routeIs('clients') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('navlinks.clients') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('therapists') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('navlinks.therapists') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('companies') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('navlinks.companies') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('about') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('navlinks.about') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('contact') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('navlinks.contact') }}
            </a>
        </div>
        <div class="px-4 py-3 border-t border-white/20 bg-del-rio">
            <x-ui.button variant="header" href="#" wire:navigate class="w-full">
                Get matched
            </x-ui.button>
        </div>
    </div>
</header>
