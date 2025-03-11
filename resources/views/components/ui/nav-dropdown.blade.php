@props([
    'label' => 'Dropdown',
    'active' => false,
    'items' => [],
])

<div class="relative inline-block nav-dropdown-container">
    <!-- Dropdown toggle -->
    <input type="checkbox" id="dropdown-{{ Str::slug($label) }}" class="dropdown-toggle hidden">
    <label
        for="dropdown-{{ Str::slug($label) }}"
        class="nav-item nav-dropdown-trigger {{ $active ? 'active' : '' }} flex items-center cursor-pointer"
    >
        {{ $label }}
        <span class="ml-1 inline-block text-xs" aria-hidden="true">•</span>
    </label>

    <!-- Dropdown menu -->
    <div class="nav-dropdown absolute left-0 mt-2 z-50 min-w-[220px] bg-white/95 rounded-md shadow-lg border border-white/20">
        <div class="py-1">
            @foreach($items as $item)
                <a
                    href="{{ $item['href'] }}"
                    {{ isset($item['wire:navigate']) && $item['wire:navigate'] ? 'wire:navigate' : '' }}
                    class="nav-lang-item"
                >
                    <span class="bullet-point">•</span>
                    <span class="dropdown-text">{{ $item['label'] }}</span>
                </a>
            @endforeach
        </div>
    </div>
</div>
