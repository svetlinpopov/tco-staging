@props(['title' => 'How it works'])

<div class="section-2-wrapper w-full h-full">
    <div class="flex h-full">
        <!-- Left column (60%) -->
        <div class="w-3/5 h-full border border-red-500 p-8 flex items-center">
            <div class="max-w-xl">
                <h2 class="headline-2 text-blue-yankees mb-6">{{ $title }}</h2>
                <p class="body-18 text-charcoal mb-12">
                    Our platform simplifies finding the right therapist, making mental health support accessible to everyone.
                </p>

                <div class="space-y-8">
                    <!-- Step 1 -->
                    <div class="flex items-start">
                        <div class="step-circle flex-shrink-0 mr-6">
                            <span class="step-number">01</span>
                        </div>
                        <div>
                            <h3 class="step-title mb-2">Share your needs</h3>
                            <p class="step-description">
                                Complete a brief questionnaire about your therapy preferences, needs, and goals.
                            </p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex items-start">
                        <div class="step-circle flex-shrink-0 mr-6">
                            <span class="step-number">02</span>
                        </div>
                        <div>
                            <h3 class="step-title mb-2">Get matched</h3>
                            <p class="step-description">
                                Our algorithm connects you with therapists who best meet your specific requirements.
                            </p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex items-start">
                        <div class="step-circle flex-shrink-0 mr-6">
                            <span class="step-number">03</span>
                        </div>
                        <div>
                            <h3 class="step-title mb-2">Begin your journey</h3>
                            <p class="step-description">
                                Schedule your first session and start your path to better mental wellbeing.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <x-ui.button variant="primary" class="btn-lg" href="#" wire:navigate>
                        Find your match
                    </x-ui.button>
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
