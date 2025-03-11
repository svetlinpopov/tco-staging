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

/**
 * Initialize all functionality
 * This function sets up all interactive components
 * and is called on initial page load and navigation
 */
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

/**
 * Configure JavaScript diagnostics
 * Only enabled in development mode and controlled via localStorage
 *
 * Available options:
 * - dropdowns: Diagnose dropdown menu state and interactions
 * - navigation: Diagnose navigation links and active states
 * - events: Log all click events to console
 * - verbose: Show detailed diagnostic information
 *
 * To enable/disable in browser console:
 * - localStorage.setItem('js_diagnostics', 'enabled')
 * - localStorage.setItem('js_diagnostics', 'disabled')
 */
function configureDiagnostics() {
    // Determine if diagnostics should be enabled
    const isDevelopment = process.env.NODE_ENV !== 'production';
    const diagnosticsSetting = localStorage.getItem('js_diagnostics');

    // Enable diagnostics only in development mode or if explicitly enabled
    if (isDevelopment || diagnosticsSetting === 'enabled') {
        console.log('🔧 Development mode detected, initializing diagnostics...');

        // Configure which diagnostics to enable
        enableDiagnostics({
            dropdowns: true,    // Monitor dropdown state and interactions
            navigation: true,   // Monitor navigation elements
            events: true,       // Log all click events
            verbose: true       // Show detailed information
        });

        // Add console message to show how to disable
        console.info(
            '📝 JS Diagnostics are enabled. To disable: ' +
            'localStorage.setItem("js_diagnostics", "disabled") ' +
            'and refresh the page.'
        );
    } else if (diagnosticsSetting === 'disabled') {
        // Explicitly disabled
        disableDiagnostics();
        console.info('📝 JS Diagnostics are disabled.');
    }
}

// Event listeners for initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializeAll();

    // Configure diagnostics after components are initialized
    configureDiagnostics();
});

// Handle Livewire navigation events
document.addEventListener('livewire:navigated', initializeAll);

// Listen for Livewire events
document.addEventListener('livewire:init', () => {
    Livewire.on('language-changed', () => {
        initializeAll();
    });
});
