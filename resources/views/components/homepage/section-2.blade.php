@props(['title' => 'How it works'])

<div class="section-2-wrapper w-full h-full">
    <div class="flex h-full">
        <!-- Left column (60%) -->
        <div class="w-3/5 h-full border border-red-500 p-8 flex items-center">
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
                        <div class="dot-number-combo active">
                            <div class="dot"></div>
                            <span class="number">01</span>
                            <span class="combo-text">We customize our solutions to fit your unique needs, aligning with your personal journey.</span>
                        </div>
                        <div class="dot-number-combo">
                            <div class="dot"></div>
                            <span class="number">02</span>
                            <span class="combo-text">Our experienced professionals provide compassionate support and actionable insights.</span>
                        </div>
                        <div class="dot-number-combo">
                            <div class="dot"></div>
                            <span class="number">03</span>
                            <span class="combo-text">We provide tools and strategies to support your mental, emotional, and physical well-being.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right column (40%) -->
        <div class="w-2/5 h-full border border-red-500 p-8 flex items-center justify-center">
            <!-- This area will contain an image or additional content -->
            <div class="w-full h-full flex items-center justify-center">
                <p class="text-lg text-gray-500">Image/Content Area</p>
            </div>
        </div>
    </div>
</div>
