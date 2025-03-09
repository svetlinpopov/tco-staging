@props([
    'href' => '#',
    'active' => false,
    'disabled' => false,
    'class' => '',
])

@php
    // Base classes
    $baseClasses = 'nav-item';

    // Active state
    $activeClass = $active ? 'active' : '';

    // Disabled state
    $disabledClass = $disabled ? 'disabled' : '';

    // Combine classes
    $classes = trim("$baseClasses $activeClass $disabledClass $class");

    // Get wire:navigate attribute if provided
    $wireNavigate = $attributes->get('wire:navigate');
@endphp

<a
    href="{{ $disabled ? '#' : $href }}"
    {{ $wireNavigate && !$disabled ? 'wire:navigate' : '' }}
    {{ $disabled ? 'aria-disabled="true"' : '' }}
    {{ $attributes->except(['wire:navigate'])->merge(['class' => $classes]) }}
>
    {{ $slot }}
</a>
