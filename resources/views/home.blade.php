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

            <!-- Hero Headlines Container with z-index 10 -->
            <div class="hero-headlines-container z-10">
                <div class="mx-auto text-center">
                    <h1 id="hero-headline-1" class="headline-1-light-italic">Expert care.</h1>
                    <h1 id="hero-headline-2" class="headline-1">Simplified.</h1>
                    <h1 id="hero-headline-3" class="headline-1">Balanced.</h1>
                </div>
            </div>

            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16 relative z-5">
                <!-- Main content container with higher z-index than background and circles -->
            </div>
        </section>

        <!-- Section 2 -->
        <section id="section2" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200">
            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16">
                <h2 class="text-2xl md:text-4xl font-semibold">Container 2</h2>
            </div>
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
