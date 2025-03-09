<?php

namespace App\Livewire;
use Livewire\Component;

class LanguageSwitcher extends Component
{
    public function switchLocale($locale)
    {
        if (in_array($locale, config('app.supported_locales'))) {
            session()->put('locale', $locale);

            // Get current route name and parameters
            $routeName = request()->route()->getName();
            $parameters = request()->route()->parameters();
            $parameters['locale'] = $locale;

            // Redirect to the same route with new locale
            return redirect()->route($routeName, $parameters);
        }
    }

    public function render()
    {
        return view('livewire.language-switcher', [
            'currentLocale' => app()->getLocale(),
            'locales' => config('app.supported_locales')
        ]);
    }
}
