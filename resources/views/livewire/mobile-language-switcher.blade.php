<div class="relative inline-block mobile-language-dropdown-container">
    <!-- Dropdown toggle -->
    <input type="checkbox" id="mobile-language-dropdown" class="dropdown-toggle hidden">
    <label
        for="mobile-language-dropdown"
        class="btn btn-mobile-lang-selector flex items-center justify-between w-full cursor-pointer"
        @if(count($locales) <= 1) disabled @endif
    >
        {{ $this->getLocaleName($currentLocale) }}
    </label>

    <!-- Dropup menu -->
    @if(count($locales) > 1)
        <div class="language-dropup absolute left-0 bottom-full mb-2 z-50 w-full bg-white/95 rounded-md shadow-lg border border-white/20">
            <div class="py-1">
                @foreach($locales as $locale)
                    @if($locale !== $currentLocale)
                        <a
                            href="#"
                            class="nav-lang-item"
                            wire:click="switchLocale('{{ $locale }}')"
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
