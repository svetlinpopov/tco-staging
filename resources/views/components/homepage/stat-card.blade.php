@props([
    'position' => 'left', // Slider position: left, center, or right
    'cards' => [
        [
            'value' => '12k',
            'description' => 'Individual Matches',
            'icon' => 'user-check' // Placeholder for future icon implementation
        ],
        [
            'value' => '97%',
            'description' => 'Client Satisfaction',
            'icon' => 'thumbs-up' // Placeholder for future icon implementation
        ],
        [
            'value' => '5k+',
            'description' => 'Certified Therapists',
            'icon' => 'certificate' // Placeholder for future icon implementation
        ]
    ]
])

<div
    class="stat-card-container"
    x-data="statCards"
>
    <!-- Dot slider -->
    <div class="dot-slider dot-slider-{{ $position }}">
        @foreach($cards as $index => $card)
            <button
                @click="setActiveIndex({{ $index }})"
                class="dot"
                :class="{ 'active': activeIndex === {{ $index }} }"
                aria-label="Show statistic {{ $index + 1 }}"
            ></button>
        @endforeach
    </div>

    <!-- Stat cards -->
    <div class="stat-cards">
        @foreach($cards as $index => $card)
            <div
                class="stat-card"
                :class="{ 'active': activeIndex === {{ $index }} }"
            >
                <!-- Icon placeholder -->
                <div class="stat-card-icon">
                    <!-- Will be replaced with actual icon in the future -->
                </div>

                <!-- Stat value -->
                <div class="stat-value">{{ $card['value'] }}</div>

                <!-- Stat description -->
                <div class="stat-description">{{ $card['description'] }}</div>
            </div>
        @endforeach
    </div>
</div>
