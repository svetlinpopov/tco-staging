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
import { enableDiagnostics, disableDiagnostics } from './utils/helpers';

// Enable/disable JS diagnostics
enableDiagnostics({dropdowns: true, navigation: true, events: true, verbose: true});

// Initialize all functionality
function initializeAll() {
    // Initialize side navigation dots
    initSideNavigation();

    // Initialize header background transition on scroll
    initHeaderEffects();

    // Initialize navigation functionality
    initNavigation();

    // Initialize dropdown menus - this needs to run last
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

// Wait for DOM and run diagnostics
document.addEventListener('DOMContentLoaded', () => {
    // Wait 1 second for everything to initialize
    setTimeout(diagDropdowns, 1000);
});
