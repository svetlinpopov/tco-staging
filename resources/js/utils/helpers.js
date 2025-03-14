/**
 * Helper Utilities
 */

/**
 * Debounce function to improve performance
 *
 * @param {Function} func - The function to debounce
 * @param {number} wait - Time in milliseconds to wait between calls
 * @return {Function} Debounced function
 */
export function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Convert hex color to rgba
 *
 * @param {string} hex - Hex color code (with or without #)
 * @param {number} alpha - Alpha channel value (0-1)
 * @return {string|null} RGBA color string or null if invalid input
 */
export function hexToRgba(hex, alpha = 1) {
    if (!hex) return null;

    // Remove # if present
    hex = hex.replace('#', '');

    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return rgba value
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Store diagnostic cleanup functions
let activeListeners = [];
let diagnosticsActive = false;

/**
 * Enable JavaScript diagnostics for debugging
 *
 * @param {Object} options - Configuration options
 * @param {boolean} options.dropdowns - Whether to diagnose dropdowns
 * @param {boolean} options.navigation - Whether to diagnose navigation
 * @param {boolean} options.events - Whether to log all click events
 * @param {boolean} options.verbose - Whether to log verbose details
 * @return {boolean} Success status
 */
export function enableDiagnostics(options = {}) {
    // Default options
    const config = {
        dropdowns: true,
        navigation: false,
        events: false,
        verbose: false,
        ...options
    };

    // Don't initialize twice
    if (diagnosticsActive) {
        console.warn('Diagnostics already active. Call disableDiagnostics() first.');
        return false;
    }

    console.log('🔍 Enabling JavaScript diagnostics with options:', config);

    // Clear any existing listeners
    disableDiagnostics();

    // Diagnose dropdowns if enabled
    if (config.dropdowns) {
        diagDropdowns(config.verbose);
    }

    // Diagnose navigation if enabled
    if (config.navigation) {
        diagNavigation(config.verbose);
    }

    // Log all click events if enabled
    if (config.events) {
        const clickListener = (e) => {
            console.log('🖱️ Click event:', {
                element: e.target.tagName,
                class: e.target.className,
                id: e.target.id,
                text: e.target.textContent?.trim().substring(0, 20) + (e.target.textContent?.length > 20 ? '...' : '')
            });
        };

        document.addEventListener('click', clickListener);
        activeListeners.push(() => document.removeEventListener('click', clickListener));
    }

    // Mark as active
    diagnosticsActive = true;

    // Add visual indicator on page
    const indicator = document.createElement('div');
    indicator.id = 'js-diagnostics-indicator';
    indicator.style.cssText = 'position:fixed;bottom:10px;right:10px;background:rgba(255,0,0,0.7);color:white;padding:5px 10px;font-size:12px;z-index:9999;border-radius:4px;';
    indicator.textContent = '🔍 JS Diagnostics Active';
    document.body.appendChild(indicator);

    // Store cleanup function
    activeListeners.push(() => {
        if (document.getElementById('js-diagnostics-indicator')) {
            document.body.removeChild(document.getElementById('js-diagnostics-indicator'));
        }
    });

    return true;
}

/**
 * Disable active diagnostics
 *
 * @return {boolean} Success status
 */
export function disableDiagnostics() {
    // Clean up all active listeners
    while (activeListeners.length) {
        const cleanup = activeListeners.pop();
        if (typeof cleanup === 'function') {
            cleanup();
        }
    }

    // Mark as inactive
    diagnosticsActive = false;

    console.log('🔍 JavaScript diagnostics disabled');
    return true;
}

/**
 * Diagnose dropdown functionality
 *
 * @private
 * @param {boolean} verbose - Whether to log verbose details
 */
function diagDropdowns(verbose = false) {
    console.log('🔍 Diagnosing dropdowns...');

    // Check all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-menu, .language-dropdown, .nav-dropdown');
    console.log(`Found ${dropdowns.length} dropdowns`);

    // Log dropdown initial state if verbose
    if (verbose) {
        dropdowns.forEach((dropdown, i) => {
            console.log(`Dropdown ${i+1}:`, {
                element: dropdown.className,
                opacity: getComputedStyle(dropdown).opacity,
                visibility: getComputedStyle(dropdown).visibility,
                display: getComputedStyle(dropdown).display
            });
        });
    }

    // Check all triggers
    const triggers = document.querySelectorAll('.dropdown-toggle-label, .btn-lang-selector, .nav-dropdown-trigger, .nav-item');
    console.log(`Found ${triggers.length} dropdown triggers`);

    // Add diagnostic click handler to triggers
    triggers.forEach((trigger, i) => {
        if (verbose) {
            console.log(`Trigger ${i+1}:`, {
                element: trigger.className,
                text: trigger.textContent.trim(),
                hasCursor: getComputedStyle(trigger).cursor === 'pointer'
            });
        }

        // Add click listener for diagnostics
        const clickListener = () => {
            console.log(`🖱️ Trigger ${i+1} clicked:`, trigger.textContent.trim());
        };

        trigger.addEventListener('click', clickListener);
        activeListeners.push(() => trigger.removeEventListener('click', clickListener));
    });
}

/**
 * Diagnose navigation functionality
 *
 * @private
 * @param {boolean} verbose - Whether to log verbose details
 */
function diagNavigation(verbose = false) {
    console.log('🔍 Diagnosing navigation...');

    // Check navigation items
    const navLinks = document.querySelectorAll('.nav-item');
    console.log(`Found ${navLinks.length} navigation links`);

    // Log navigation state if verbose
    if (verbose) {
        navLinks.forEach((link, i) => {
            console.log(`Nav link ${i+1}:`, {
                href: link.getAttribute('href'),
                text: link.textContent.trim(),
                active: link.classList.contains('active')
            });
        });
    }

    // Add diagnostic click handler to navigation
    navLinks.forEach((link, i) => {
        const clickListener = (e) => {
            console.log(`🖱️ Nav link ${i+1} clicked:`, link.textContent.trim());
        };

        link.addEventListener('click', clickListener);
        activeListeners.push(() => link.removeEventListener('click', clickListener));
    });
}
