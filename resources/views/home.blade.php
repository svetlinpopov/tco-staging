<x-layouts.frontend :title="$title">
    <div class="snap-container">
        <!-- Section-Hero with floating SVG -->
        <section id="section1" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200 relative overflow-hidden">
            <!-- Background container with z-index 1 -->
            <div class="hero-background-container absolute top-0 left-0 w-full h-full z-1">
                <!-- Background is set in CSS via #section1 selector -->
            </div>

            <!-- Floating SVG container with z-index 2 -->
            <div class="floating-svg-container absolute top-0 left-0 w-full h-full z-2" style="padding: 80px;">
                <div class="relative w-full h-full">
                    <div class="floating-svg-wrapper" style="top: -40px; left: -40px; width: calc(100% + 80px); height: calc(100% + 80px);">
                        <img src="{{ Vite::asset('resources/img/circle-lines.svg') }}" alt="" class="floating-svg">
                    </div>
                </div>
            </div>

            <!-- Hero Headlines Container with z-index 10 - Modified structure -->
            <div class="hero-headlines-container z-10">
                <div class="hero-headlines-wrapper">
                    <h1 id="hero-headline-1" class="headline-1-light-italic">Expert care.</h1>
                    <h1 id="hero-headline-2" class="headline-1">Simplified.</h1>
                    <h1 id="hero-headline-3" class="headline-1">Balanced.</h1>
                </div>
            </div>

            <!-- Person Overlay Container with z-index 15 -->
            <div class="person-overlay-container">
                <div class="person-overlay-image" alt="Person overlay"></div>
            </div>

            <!-- Hero CTA Container with z-index 20 -->
            <div class="hero-cta-container">
                <p class="hero-cta-text">
                    We provide the support you need to achieve balance, embrace your true self, and navigate your journey.
                </p>
                <x-ui.button variant="primary" class="btn-xl" href="#" wire:navigate>
                    Find a Therapist
                </x-ui.button>
            </div>

            <!-- Stat Card Component with z-index 20 -->
            <x-homepage.stat-card position="center" :cards="[
                [
                    'value' => '12k',
                    'description' => 'Individual Matches',
                    'icon' => 'heart'
                ],
                [
                    'value' => '97%',
                    'description' => 'Client Satisfaction',
                    'icon' => 'fire-left'
                ],
                [
                    'value' => '5k+',
                    'description' => 'Certified Therapists',
                    'icon' => 'star-favorite'
                ]
            ]" />

            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16 relative z-5">
                <!-- Main content container with higher z-index than background and circles -->
            </div>
        </section>

        <!-- Section 2 - How it works -->
        <section id="section2" class="snap-section w-full min-h-screen border-b border-neutral-200 relative">
            <x-homepage.section-2 />
        </section>

        <!-- Section 3 -->
        <section id="section3" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 3</h2>
            </div>
        </section>

        <!-- Section 4 -->
        <section id="section4" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 4</h2>
            </div>
        </section>

        <!-- Section 5 -->
        <section id="section5" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 5</h2>
            </div>
        </section>

        <!-- Section 6 -->
        <section id="section6" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 6</h2>
            </div>
        </section>

        <!-- Section 7 -->
        <section id="section7" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 7</h2>
            </div>
        </section>

        <!-- Section 8 -->
        <section id="section8" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 8</h2>
            </div>
        </section>

        <!-- Section 9 -->
        <section id="section9" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 9</h2>
            </div>
        </section>

        <!-- Section 10 -->
        <section id="section10" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 10</h2>
            </div>
        </section>
    </div>
</x-layouts.frontend>
