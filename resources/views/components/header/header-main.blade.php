<header class="fixed top-0 left-0 w-full z-10 text-white transition-all duration-500 rounded-b-2xl">
    <div class="mobile-menu-container w-full"">
        <input type="checkbox" id="mobile-menu-toggle" class="hidden">

        <div class="w-full px-8 py-6 md:px-12 lg:px-12 transition-all duration-500 header-padding">
            <div class="mx-auto flex items-center justify-between w-full">
                <!-- Logo -->
                <a href="/" wire:navigate class="flex items-center text-base">
                    <img src="{{ Vite::asset('resources/img/tco-logo.svg') }}" alt="App Logo" class="h-[25px] w-auto">
                </a>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center">
                    <!-- Clients dropdown menu -->
                    <x-ui.nav-dropdown
                        :label="__('navlinks.clients')"
                        :active="request()->routeIs('clients*')"
                        :items="[
                            [
                                'label' => __('navlinks.therapist_list'),
                                'href' => '#',
                                'wire:navigate' => true
                            ],
                            [
                                'label' => __('navlinks.group_therapy'),
                                'href' => '#',
                                'wire:navigate' => true
                            ]
                        ]"
                    />

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

                    <!-- Mobile menu toggle -->
                    <div class="lg:hidden">
                        <label for="mobile-menu-toggle" class="p-2 rounded-md hover:bg-white/20 focus:outline-none text-white cursor-pointer block">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div class="mobile-menu lg:hidden w-full">
            <div class="px-4 pt-2 pb-3 space-y-1 border-t border-white/20 bg-del-rio">
                <a href="#" wire:navigate class="{{ request()->routeIs('clients*') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-base text-white">
                    {{ __('navlinks.clients') }}
                </a>
                <!-- Client submenu items for mobile -->
                <div class="pl-4 space-y-1">
                    <a href="#" wire:navigate class="{{ request()->routeIs('client.therapist_list') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-sm text-white">
                        {{ __('navlinks.therapist_list') }}
                    </a>
                    <a href="#" wire:navigate class="{{ request()->routeIs('client.group_therapy') ? 'bg-white/20 font-medium' : 'hover:bg-white/10' }} block px-3 py-2 rounded-md text-sm text-white">
                        {{ __('navlinks.group_therapy') }}
                    </a>
                </div>
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
                    {{ __('navlinks.ctamatched') }}
                </x-ui.button>
            </div>
        </div>
    </div>
</header>
