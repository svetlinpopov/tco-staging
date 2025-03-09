<div>
    <div class="flex space-x-2">
        @foreach($locales as $locale)
            <x-ui.lang-button
                :locale="$locale"
                :active="$currentLocale == $locale"
                wire:click.prevent="switchLocale('{{ $locale }}')"
                onclick="setTimeout(() => window.location.reload(), 50)"
            />
        @endforeach
    </div>
</div>
