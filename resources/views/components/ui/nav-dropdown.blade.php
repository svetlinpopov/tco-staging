@props([
    'label' => 'Dropdown',
    'active' => false,
    'items' => [],
])

<div class="relative inline-block dropdown-wrapper">
    <!-- Dropdown toggle -->
    <input type="checkbox" id="dropdown-{{ Str::slug($label) }}" class="dropdown-toggle hidden">
    <label
        for="dropdown-{{ Str::slug($label) }}"
        class="nav-item {{ $active ? 'active' : '' }} flex items-center cursor-pointer"
    >
        {{ $label }}
        <span class="ml-1 inline-block text-xs" aria-hidden="true">•</span>
    </label>

    <!-- Dropdown menu -->
    <div class="dropdown-menu absolute left-0 mt-2 z-50 min-w-[220px] bg-white/95 rounded-md shadow-lg border border-white/20">
        <div class="py-1">
            @foreach($items as $item)
                <a
                    href="{{ $item['href'] }}"
                    {{ isset($item['wire:navigate']) && $item['wire:navigate'] ? 'wire:navigate' : '' }}
                    class="nav-lang-item"
                >
                    <span class="bullet-point">•</span>
                    <span class="locale-text">{{ $item['label'] }}</span>
                </a>
            @endforeach
        </div>
    </div>
</div>
