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
    <div id="mobile-menu-frame" class="pt-24 h-full w-full flex flex-col">
        <div class="flex-1 overflow-y-auto w-full">
            <!-- Navigation Links -->
            <div id="mobile-nav-links" class="w-full">
                <!-- For Clients with submenu - no bottom border on parent -->
                <div class="mobile-nav-group">
                    <a href="#" wire:navigate
                        id="mobile-nav-item-1"
                        class="{{ request()->routeIs('clients*') ? 'active' : '' }} mobile-nav-link mobile-nav-parent text-3xl font-light">
                        <span class="mobile-nav-number">01.</span>
                        {{ __('navlinks.clients') }}
                    </a>
                    <!-- Client submenu items for mobile -->
                    <div class="mobile-nav-children">
                        <a href="#" wire:navigate
                            id="mobile-nav-child-1"
                            class="{{ request()->routeIs('client.therapist_list') ? 'active' : '' }} mobile-nav-link mobile-nav-child text-2xl font-light">
                            <span class="mobile-nav-bullet">•</span>
                            {{ __('navlinks.therapist_list') }}
                        </a>
                        <a href="#" wire:navigate
                            id="mobile-nav-child-2"
                            class="{{ request()->routeIs('client.group_therapy') ? 'active' : '' }} mobile-nav-link mobile-nav-child text-2xl font-light mobile-nav-last-child">
                            <span class="mobile-nav-bullet">•</span>
                            {{ __('navlinks.group_therapy') }}
                        </a>
                    </div>
                </div>

                <a href="#" wire:navigate
                    id="mobile-nav-item-2"
                    class="{{ request()->routeIs('therapists') ? 'active' : '' }} mobile-nav-link mobile-nav-item text-3xl font-light">
                    <span class="mobile-nav-number">02.</span>
                    {{ __('navlinks.therapists') }}
                </a>

                <a href="#" wire:navigate
                    id="mobile-nav-item-3"
                    class="{{ request()->routeIs('companies') ? 'active' : '' }} mobile-nav-link mobile-nav-item text-3xl font-light">
                    <span class="mobile-nav-number">03.</span>
                    {{ __('navlinks.companies') }}
                </a>

                <a href="{{ route('about') }}" wire:navigate
                    id="mobile-nav-item-4"
                    class="{{ request()->routeIs('about') ? 'active' : '' }} mobile-nav-link mobile-nav-item text-3xl font-light">
                    <span class="mobile-nav-number">04.</span>
                    {{ __('navlinks.about') }}
                </a>

                <a href="#" wire:navigate
                    id="mobile-nav-item-5"
                    class="{{ request()->routeIs('contact') ? 'active' : '' }} mobile-nav-link mobile-nav-item text-3xl font-light">
                    <span class="mobile-nav-number">05.</span>
                    {{ __('navlinks.contact') }}
                </a>
            </div>
        </div>

        <!-- Footer Actions -->
        <div class="py-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <livewire:mobile-language-switcher />
                </div>
                <div>
                    <x-ui.button variant="header" href="#" wire:navigate class="w-full">
                        {{ __('navlinks.ctamatched') }}
                    </x-ui.button>
                </div>
            </div>
        </div>
    </div>
</div>
