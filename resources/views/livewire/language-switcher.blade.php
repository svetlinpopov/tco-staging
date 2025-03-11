<div class="relative inline-block language-dropdown-container">
    <!-- Dropdown toggle -->
    <input type="checkbox" id="language-dropdown" class="dropdown-toggle hidden">
    <label
        for="language-dropdown"
        class="btn btn-lang-selector flex items-center cursor-pointer"
        @if(count($locales) <= 1) disabled @endif
    >
        {{ $this->getLocaleDisplay($currentLocale) }}
        @if(count($locales) > 1)
            <span class="ml-1 inline-block text-xs" aria-hidden="true">•</span>
        @endif
    </label>

    <!-- Dropdown menu -->
    @if(count($locales) > 1)
        <div class="language-dropdown absolute right-0 mt-2 z-50 min-w-[160px] bg-white/95 rounded-md shadow-lg border border-white/20">
            <div class="py-1">
                @foreach($locales as $locale)
                    @if($locale !== $currentLocale)
                        <a
                            href="#"
                            class="nav-lang-item"
                            wire:click.prevent="switchLocale('{{ $locale }}')"
                            onclick="setTimeout(() => window.location.reload(), 50)"
                        >
                            <span class="bullet-point">•</span>
                            <span class="locale-text">{{ $this->getLocaleName($locale) }}</span>
                        </a>
                    @endif
                @endforeach
            </div>
        </div>
    @endif
</div>
