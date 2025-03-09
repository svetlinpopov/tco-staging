<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageSwitcher extends Component
{
    public $currentLocale;
    public $locales = ['en', 'de', 'fr', 'es', 'it']; // Add your supported languages here

    public function mount()
    {
        $this->currentLocale = App::getLocale();
    }

    public function switchLocale($locale)
    {
        if (in_array($locale, $this->locales)) {
            // Store locale in session
            Session::put('locale', $locale);

            // The page will be reloaded via the link's default behavior
        }
    }

    public function getLocaleDisplay($locale)
    {
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

        return $localeMap[$locale] ?? strtoupper($locale);
    }

    public function getLocaleName($locale)
    {
        // Full language names in their native languages
        $localeNames = [
            'en' => 'English',
            'de' => 'Deutsch',
            'fr' => 'Français',
            'es' => 'Español',
            'it' => 'Italiano',
            'nl' => 'Nederlands',
            'pt' => 'Português',
            'ru' => 'Русский',
        ];

        return $localeNames[$locale] ?? ucfirst($locale);
    }

    public function render()
    {
        return view('livewire.language-switcher');
    }
}
