<?php

namespace App\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LanguageSwitcher extends Component
{
    public $currentLocale;
    public $locales = ['en', 'de', 'fr', 'es']; // Add your supported languages here

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

    public function render()
    {
        return view('livewire.language-switcher');
    }
}
