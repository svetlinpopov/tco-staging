<div>
    <div class="flex space-x-2">
        @foreach($locales as $locale)
            <a
                href="{{ request()->url() }}"
                wire:click.prevent="switchLocale('{{ $locale }}')"
                onclick="setTimeout(() => window.location.reload(), 50)"
                class="{{ $currentLocale == $locale ? 'font-bold' : 'opacity-80 hover:opacity-100' }} text-white transition-opacity"
            >
                {{ strtoupper($locale) }}
            </a>
        @endforeach
    </div>
</div>
