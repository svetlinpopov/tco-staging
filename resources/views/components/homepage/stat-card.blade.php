@props([
    'position' => 'left', // Slider position: left, center, or right
    'cards' => [
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
                <!-- Dynamic icon based on card type -->
                <div class="stat-card-icon">
                    <img src="{{ Vite::asset('resources/img/icons/' . $card['icon'] . '.svg') }}" alt="{{ $card['icon'] }}" class="stat-card-icon-svg">
                </div>

                <!-- Stat value -->
                <div class="stat-value">{{ $card['value'] }}</div>

                <!-- Stat description -->
                <div class="stat-description">{{ $card['description'] }}</div>
            </div>
        @endforeach
    </div>
</div>
