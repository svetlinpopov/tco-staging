<header class="fixed top-0 left-0 w-full z-10 text-white transition-all duration-500 rounded-b-2xl">
    <div class="w-full px-8 py-6 md:px-12 lg:px-12 transition-all duration-500 header-padding">
        <div class="mx-auto flex items-center justify-between w-full">
            <!-- Logo -->
            <a href="/" wire:navigate class="flex items-center text-base">
                <img src="{{ Vite::asset('resources/img/tco-logo.svg') }}" alt="App Logo" class="h-[25px] w-auto">
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
                <a href="#" wire:navigate class="{{ request()->routeIs('clients') ? 'font-medium' : 'hover:opacity-80' }} text-white text-base">
                    {{ __('navlinks.clients') }}
                </a>
                <a href="#" wire:navigate class="{{ request()->routeIs('therapists') ? 'font-medium' : 'hover:opacity-80' }} text-white text-base">
                    {{ __('navlinks.therapists') }}
                </a>
                <a href="#" wire:navigate class="{{ request()->routeIs('companies') ? 'font-medium' : 'hover:opacity-80' }} text-white text-base">
                    {{ __('navlinks.companies') }}
                </a>
                <a href="{{ route('about') }}" wire:navigate class="{{ request()->routeIs('about') ? 'font-medium' : 'hover:opacity-80' }} text-white text-base">
                    {{ __('navlinks.about') }}
                </a>
                <a href="#" wire:navigate class="{{ request()->routeIs('contact') ? 'font-medium' : 'hover:opacity-80' }} text-white text-base">
                    {{ __('navlinks.contact') }}
                </a>
            </nav>

            <div class="flex items-center space-x-4">
                <!-- Language Switcher -->
                <livewire:language-switcher />

                <!-- CTA Button -->
                <a href="#" wire:navigate class="hidden sm:inline-flex items-center px-5 py-2 border border-white text-sm font-medium rounded-md bg-transparent hover:bg-white/20 focus:outline-none focus:ring-1 text-white">
                    Get Started
                </a>

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
                {{ __('For Clients') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('therapists') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('For Therapists') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('companies') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('For Companies') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('about') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('About Us') }}
            </a>
            <a href="#" wire:navigate class="{{ request()->routeIs('contact') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                {{ __('Contact Us') }}
            </a>
        </div>
        <div class="px-4 py-3 border-t border-white/20 bg-del-rio">
            <a href="#" wire:navigate class="w-full flex items-center justify-center px-4 py-2 border border-white text-base font-medium rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Get Started
            </a>
        </div>
    </div>
</header>
