<?php

use App\Livewire\Settings\Appearance;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home', ['title' => 'Home']);
})->name('home');

Route::get('/about', function () {
    return view('home', ['title' => 'About Us']);
})->name('about');

Route::get('/buttons', function () {
    return view('buttons-demo', ['title' => 'Buttons Demo']);
})->name('buttons');

// !!!For development purposes only!!!
Route::get('/test/section-2', function () {
    return view('test.section-2');
})->name('test.section-2');
