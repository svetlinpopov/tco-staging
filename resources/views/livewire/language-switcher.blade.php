<div>
    <div class="flex space-x-2">
        @foreach($locales as $locale)
            <a
               href="{{ route(Route::currentRouteName(), array_merge(Route::current()->parameters(), ['locale' => $locale])) }}"
               wire:navigate
               class="{{ $currentLocale == $locale ? 'font-bold' : '' }}"
            >
                {{ strtoupper($locale) }}
            </a>
        @endforeach
    </div>
</div>
