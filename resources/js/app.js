/**
 * Main application JavaScript
 */
import.meta.glob([
    '../img/**',
    '../fonts/**',
]);

// Import modules
import { initHeaderEffects } from './modules/header-effects';
import { initNavigation } from './modules/navigation';
import { initDropdowns } from './modules/dropdowns';
import { initMenuToggle } from './modules/menu-toggle';
import { initHeroAnimations } from './modules/hero-animations';
import { initStatCards, registerStatCardsComponent } from './modules/stat-cards';

/**
 * Initialize all functionality
 */
function initializeAll() {
    // Initialize header background transition on scroll
    initHeaderEffects();

    // Initialize navigation functionality
    initNavigation();

    // Initialize mobile menu toggle
    initMenuToggle();

    // Initialize hero animations
    initHeroAnimations();

    // Initialize stat cards
    initStatCards();

    // Initialize dropdown menus - this needs to run last
    initDropdowns();
}

// Event listeners for initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializeAll();
});

// Handle Livewire navigation events
document.addEventListener('livewire:navigated', initializeAll);

// Initialize Alpine components when Alpine is loaded
document.addEventListener('alpine:init', () => {
    // Register stat cards component
    registerStatCardsComponent();
});

// Listen for Livewire events
document.addEventListener('livewire:init', () => {
    Livewire.on('language-changed', () => {
        initializeAll();
    });
});
