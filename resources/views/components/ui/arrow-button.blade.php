@props([
    'direction' => 'right', // left or right
    'variant' => 'dark', // dark or white
    'href' => null,
    'disabled' => false,
    'wire:navigate' => null,
    'class' => '',
])

@php
    // Base classes
    $baseClasses = 'btn btn-arrow';

    // Add variant class
    $variantClass = 'btn-arrow-' . $variant;

    // Disabled state
    $disabledClass = $disabled ? 'disabled' : '';

    // Combine classes
    $classes = trim("$baseClasses $variantClass $disabledClass $class");

    // Get wire:navigate attribute if provided
    $wireNavigate = $attributes->get('wire:navigate');

    // Define arrow paths
    $leftArrowPath = 'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z';
    $rightArrowPath = 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z';
@endphp

@if ($href)
    <a
        href="{{ $href }}"
        {{ $wireNavigate ? 'wire:navigate' : '' }}
        {{ $attributes->except(['wire:navigate'])->merge(['class' => $classes]) }}
        aria-label="{{ $direction === 'left' ? 'Previous' : 'Next' }}"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="{{ $direction === 'left' ? $leftArrowPath : $rightArrowPath }}" clip-rule="evenodd" />
        </svg>
    </a>
@else
    <button
        type="button"
        {{ $disabled ? 'disabled' : '' }}
        {{ $attributes->merge(['class' => $classes]) }}
        aria-label="{{ $direction === 'left' ? 'Previous' : 'Next' }}"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="{{ $direction === 'left' ? $leftArrowPath : $rightArrowPath }}" clip-rule="evenodd" />
        </svg>
    </button>
@endif
