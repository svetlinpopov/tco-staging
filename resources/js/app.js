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
import { initStatCards } from './modules/stat-cards';
import { enableDiagnostics, disableDiagnostics } from './utils/helpers';

/**
 * Initialize all functionality
 * This function sets up all interactive components
 * and is called on initial page load and navigation
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

// Initialize Alpine components when Alpine is loaded
document.addEventListener('alpine:init', () => {
    // Re-initialize stat cards after Alpine loads
    initStatCards();
});

// Listen for Livewire events
document.addEventListener('livewire:init', () => {
    Livewire.on('language-changed', () => {
        initializeAll();
    });

    // Register Alpine components when Livewire initializes
    window.Alpine.data('statCards', () => ({
        activeIndex: 0,
        isTransitioning: false,
        rotationTimer: null,
        transitionDuration: 500, // 1.5 seconds in milliseconds, matching CSS transition

        init() {
            // Start automatic rotation
            this.startRotation();

            // Pause rotation on hover
            this.$el.addEventListener('mouseenter', () => this.stopRotation());
            this.$el.addEventListener('mouseleave', () => this.startRotation());

            // Handle visibility changes (tab switching, etc.)
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.stopRotation();
                } else {
                    this.startRotation();
                }
            });
        },

        startRotation() {
            // Clear any existing timer
            this.stopRotation();

            // Set new rotation timer
            this.rotationTimer = setInterval(() => {
                if (!this.isTransitioning) {
                    // Calculate next index
                    const cardCount = this.$el.querySelectorAll('.stat-card').length;
                    this.changeCard((this.activeIndex + 1) % cardCount);
                }
            }, 5000); // 5 seconds per card
        },

        stopRotation() {
            if (this.rotationTimer) {
                clearInterval(this.rotationTimer);
                this.rotationTimer = null;
            }
        },

        changeCard(newIndex) {
            if (this.isTransitioning || newIndex === this.activeIndex) return;

            this.isTransitioning = true;

            // First hide current card
            const cards = this.$el.querySelectorAll('.stat-card');
            cards[this.activeIndex].classList.remove('active');

            // After transition completes, show new card
            setTimeout(() => {
                this.activeIndex = newIndex;
                cards[this.activeIndex].classList.add('active');

                // Reset transitioning state after the fade-in completes
                setTimeout(() => {
                    this.isTransitioning = false;
                }, this.transitionDuration);
            }, this.transitionDuration);
        },

        setActiveIndex(index) {
            if (!this.isTransitioning && index !== this.activeIndex) {
                this.stopRotation();
                this.changeCard(index);

                // Resume rotation after the complete transition
                setTimeout(() => {
                    this.startRotation();
                }, this.transitionDuration * 2);
            }
        }
    }));
});
