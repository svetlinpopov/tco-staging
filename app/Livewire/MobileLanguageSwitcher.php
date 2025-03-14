<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\App;

class MobileLanguageSwitcher extends Component
{
    /**
     * Available locales for the application
     */
    public $locales = ['en', 'de', 'fr', 'es'];

    /**
     * Current selected locale
     */
    public $currentLocale;

    /**
     * Initialize component state
     */
    public function mount()
    {
        $this->currentLocale = App::getLocale();
    }

    /**
     * Switch the application locale
     */
    public function switchLocale($locale)
    {
        if (in_array($locale, $this->locales)) {
            // Set the locale in the session first
            session()->put('locale', $locale);
            // Flush the session to ensure it's saved immediately
            session()->save();

            // Set the locale in the current application state
            App::setLocale($locale);
            $this->currentLocale = $locale;

            // Dispatch the language-changed event (Livewire 3 syntax)
            $this->dispatch('language-changed');

            // Redirect to the same page to apply language changes
            return redirect(request()->header('Referer'));
        }
    }

    /**
     * Get the full display name for a locale
     */
    public function getLocaleName($locale)
    {
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

    /**
     * Get the 3-letter code for a locale
     */
    public function getLocaleDisplay($locale)
    {
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

    /**
     * Render the component
     */
    public function render()
    {
        return view('livewire.mobile-language-switcher');
    }
}
