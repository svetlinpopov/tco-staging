<header class="fixed top-0 left-0 w-full z-30 text-white transition-all duration-500 rounded-b-2xl">
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
                <div class="hidden lg:block">
                    <livewire:language-switcher />
                </div>

                <!-- CTA Button - Only visible on large screens -->
                <div class="hidden lg:block">
                    <x-ui.button variant="header" href="#" wire:navigate>
                        {{ __('navlinks.ctamatched') }}
                    </x-ui.button>
                </div>

                <!-- Mobile menu toggle button - must be hidden on large screens -->
                <div class="lg:hidden">
                    <button
                        id="mobile-menu-button"
                        class="btn btn-lang-selector flex items-center cursor-pointer"
                        style="height: 35px; min-height: 35px; color: white !important;"
                    >
                        <span id="menu-toggle-text">Menu</span>
                        <span class="ml-1 inline-block text-xs" aria-hidden="true">•</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>

<!-- Mobile Menu - Outside the header for cleaner placement -->
<div id="mobile-menu" class="fixed inset-0 bg-del-rio z-20 hidden">
    <div class="pt-24 px-6 h-full flex flex-col">
        <div class="flex-1 overflow-y-auto">
            <!-- Navigation Links -->
            <div class="space-y-8">
                <a href="#" wire:navigate class="{{ request()->routeIs('clients*') ? 'active' : '' }} mobile-nav-link text-3xl font-light">
                    {{ __('navlinks.clients') }}
                </a>
                <!-- Client submenu items for mobile -->
                <div class="pl-4 space-y-6">
                    <a href="#" wire:navigate class="{{ request()->routeIs('client.therapist_list') ? 'active' : '' }} mobile-nav-link text-2xl font-light">
                        {{ __('navlinks.therapist_list') }}
                    </a>
                    <a href="#" wire:navigate class="{{ request()->routeIs('client.group_therapy') ? 'active' : '' }} mobile-nav-link text-2xl font-light">
                        {{ __('navlinks.group_therapy') }}
                    </a>
                </div>
                <a href="#" wire:navigate class="{{ request()->routeIs('therapists') ? 'active' : '' }} mobile-nav-link text-3xl font-light">
                    {{ __('navlinks.therapists') }}
                </a>
                <a href="#" wire:navigate class="{{ request()->routeIs('companies') ? 'active' : '' }} mobile-nav-link text-3xl font-light">
                    {{ __('navlinks.companies') }}
                </a>
                <a href="#" wire:navigate class="{{ request()->routeIs('about') ? 'active' : '' }} mobile-nav-link text-3xl font-light">
                    {{ __('navlinks.about') }}
                </a>
                <a href="#" wire:navigate class="{{ request()->routeIs('contact') ? 'active' : '' }} mobile-nav-link text-3xl font-light">
                    {{ __('navlinks.contact') }}
                </a>
            </div>
        </div>

        <!-- Footer Actions -->
        <div class="py-8 border-t border-white/20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <x-ui.button variant="header" href="#" wire:navigate class="w-full">
                        {{ __('navlinks.ctamatched') }}
                    </x-ui.button>
                </div>
                <div>
                    <livewire:language-switcher />
                </div>
            </div>
        </div>
    </div>
</div>
