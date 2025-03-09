<?php

use App\Livewire\Settings\Appearance;
use Illuminate\Support\Facades\Route;

Route::redirect('/', '/'.app()->getLocale());

Route::prefix('{locale}')
    ->middleware('setlocale')
    ->where(['locale' => '[a-z]{2}'])
    ->group(function () {

        Route::get('/', function () {
            return view('home');
        })->name('home');

        // Add other routes
    });
