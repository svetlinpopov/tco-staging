<x-layouts.frontend :title="$title">
    <div class="snap-container">
        <!-- Section-Hero with floating SVG -->
        <section id="section1" class="snap-section w-full min-h-screen flex items-center justify-center border-b border-neutral-200 relative overflow-hidden">
            <!-- Floating SVG container - sized to include enough padding for animation -->
            <div class="absolute top-0 left-0 w-full h-full" style="padding: 80px;">
                <div class="relative w-full h-full">
                    <div class="floating-svg-wrapper" style="top: -40px; left: -40px; width: calc(100% + 80px); height: calc(100% + 80px);">
                        <img src="{{ Vite::asset('resources/img/circle-lines.svg') }}" alt="" class="floating-svg">
                    </div>
                </div>
            </div>

            <div class="mx-auto max-w-7xl flex items-center justify-center w-full py-16 relative z-2">
                <!-- Empty container - only background and floating SVG visible -->
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
