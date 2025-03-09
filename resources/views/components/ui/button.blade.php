@props([
    'type' => 'button',
    'variant' => 'primary',
    'href' => null,
    'disabled' => false,
    'direction' => null, // For arrow buttons: 'left' or 'right'
    'class' => '',
])

@php
    // Base classes for all buttons
    $baseClasses = 'btn';

    // Add variant class
    $variantClass = 'btn-' . $variant;

    // Size from class property if specified
    $sizeClass = '';
    if (str_contains($class, 'btn-sm')) $sizeClass = 'btn-sm';
    else if (str_contains($class, 'btn-lg')) $sizeClass = 'btn-lg';
    else if (str_contains($class, 'btn-xl')) $sizeClass = 'btn-xl';
    else $sizeClass = 'btn-md';

    // Disabled state
    $disabledClass = $disabled ? 'disabled' : '';

    // Direction for arrow buttons
    $directionClass = '';
    if ($direction && ($variant === 'arrow-dark' || $variant === 'arrow-white')) {
        $directionClass = 'btn-arrow-' . $direction;
    }

    // Combine all classes
    $classes = trim("$baseClasses $variantClass $sizeClass $disabledClass $directionClass $class");

    // Get wire:navigate attribute if provided
    $wireNavigate = $attributes->get('wire:navigate');
@endphp

@if ($href)
    <a
        href="{{ $href }}"
        {{ $wireNavigate ? 'wire:navigate' : '' }}
        {{ $attributes->except(['type', 'wire:navigate', 'direction'])->merge(['class' => $classes]) }}
    >
        @if ($direction === 'left')
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        @endif

        {{ $slot }}

        @if ($direction === 'right')
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        @endif
    </a>
@else
    <button
        type="{{ $type }}"
        {{ $disabled ? 'disabled' : '' }}
        {{ $attributes->except(['type', 'direction'])->merge(['class' => $classes]) }}
    >
        @if ($direction === 'left')
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
        @endif

        {{ $slot }}

        @if ($direction === 'right')
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        @endif
    </button>
@endif
