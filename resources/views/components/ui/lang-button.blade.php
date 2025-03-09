@props([
    'locale' => 'en',
    'active' => false,
    'disabled' => false,
    'class' => '',
])

@php
    // Base classes
    $baseClasses = 'btn btn-lang-selector';

    // Active state
    $activeClass = $active ? 'active' : '';

    // Disabled state
    $disabledClass = $disabled ? 'disabled' : '';

    // Combine classes
    $classes = trim("$baseClasses $activeClass $disabledClass $class");

    // Convert locale to 3-letter format
    $localeMap = [
        'en' => 'ENG',
        'de' => 'DEU',
        'fr' => 'FRA',
        'es' => 'ESP',
        'it' => 'ITA',
        'nl' => 'NLD',
        'pt' => 'POR',
        'ru' => 'RUS',
    ];

    $displayLocale = $localeMap[$locale] ?? strtoupper($locale);
@endphp

<button
    type="button"
    {{ $disabled ? 'disabled' : '' }}
    {{ $attributes->merge(['class' => $classes]) }}
>
    {{ $displayLocale }}
</button>
