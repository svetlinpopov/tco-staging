/**
 * Main application JavaScript
 */
import.meta.glob([
    '../img/**',
    '../fonts/**',
]);

// Import modules
import { initSideNavigation } from './modules/side-navigation';
import { initHeaderEffects } from './modules/header-effects';
import { initNavigation } from './modules/navigation';
import { initDropdowns } from './modules/dropdowns';

// Initialize all functionality
function initializeAll() {
    // Initialize side navigation dots
    initSideNavigation();

    // Initialize header background transition on scroll
    initHeaderEffects();

    // Initialize navigation functionality
    initNavigation();

    // Initialize dropdown menus
    initDropdowns();
}

// Event listeners for initialization
document.addEventListener('DOMContentLoaded', initializeAll);
document.addEventListener('livewire:navigated', initializeAll);

// Listen for Livewire events
document.addEventListener('livewire:init', () => {
    Livewire.on('language-changed', () => {
        initializeAll();
    });
});
