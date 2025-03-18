@props(['title' => 'How it works'])

<div class="section-2-wrapper w-full h-full">
    <div class="flex h-full">
        <!-- Left column (60%) -->
        <div class="w-3/5 h-full s2-left-column flex items-center">
            <div class="max-w-xl">
                <!-- Section-2 Headlines Container with z-index 10 -->
                <div class="section-2-headlines-container z-10">
                    <div class="section-2-headlines-wrapper">
                        <h1 id="section-2-headline-1" class="headline-1">Empowering</h1>
                        <h1 id="section-2-headline-2" class="headline-1">your journey</h1>
                        <h1 id="section-2-headline-3" class="headline-1">to <span>self-discovery</span></h1>
                    </div>
                </div>

                <!-- Vertical Dot Navigation -->
                <div class="section-2-nav-container mt-12">
                    <div class="section-2-dots">
                        <!-- First item -->
                        <div class="s2-nav-item active">
                            <div class="s2-dot-container">
                                <div class="s2-dot"></div>
                            </div>
                            <div class="s2-number-container">
                                <span class="s2-number">01</span>
                            </div>
                            <div class="s2-text-container">
                                <span class="s2-nav-text">We customize our solutions to fit your unique needs, aligning with your personal journey.</span>
                            </div>
                        </div>

                        <!-- Second item -->
                        <div class="s2-nav-item">
                            <div class="s2-dot-container">
                                <div class="s2-dot"></div>
                            </div>
                            <div class="s2-number-container">
                                <span class="s2-number">02</span>
                            </div>
                            <div class="s2-text-container">
                                <span class="s2-nav-text">Our experienced professionals provide compassionate support and actionable insights.</span>
                            </div>
                        </div>

                        <!-- Third item -->
                        <div class="s2-nav-item">
                            <div class="s2-dot-container">
                                <div class="s2-dot"></div>
                            </div>
                            <div class="s2-number-container">
                                <span class="s2-number">03</span>
                            </div>
                            <div class="s2-text-container">
                                <span class="s2-nav-text">We provide tools and strategies to support your mental, emotional, and physical well-being.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button container aligned with dot navigation -->
                <div class="mt-8 s2-button-container">
                    <x-ui.button variant="primary-white" class="btn-xl" href="#" wire:navigate>
                        More About Us
                    </x-ui.button>
                </div>
            </div>
        </div>

        <!-- Right column (40%) -->
        <div class="w-2/5 h-full flex items-center justify-center s2-right-column">
            <!-- Image Slider Container -->
            <div class="image-slider-container">
                <img src="{{ Vite::asset('resources/img/homepage/section-2-woman-nature.jpg') }}" alt="Woman enjoying nature" class="slide-background">
                <div class="slide-text">Personalized.</div>

                <!-- SVG Ellipses Container -->
                <div class="ellipses-container">
                    <img src="{{ Vite::asset('resources/img/ellipse-section-2.svg') }}" alt="Decorative ellipse" class="ellipse-top-left">
                    <img src="{{ Vite::asset('resources/img/ellipse-section-2.svg') }}" alt="Decorative ellipse" class="ellipse-top-right">
                </div>
            </div>
        </div>
    </div>
</div>
