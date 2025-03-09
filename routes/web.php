<?php

use App\Livewire\Settings\Appearance;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home', ['title' => 'Home']);
})->name('home');

Route::get('/about', function () {
    return view('home', ['title' => 'About Us']);
})->name('about');
