/**
 * Helper Utilities
 * Common utility functions used across the application
 */

/**
 * Debounce function to improve performance
 * Limits how often a function can be called
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
 * Throttle function to improve performance
 * Ensures a function is called at most once in a specified period
 *
 * @param {Function} func - The function to throttle
 * @param {number} limit - Time in milliseconds between allowed function calls
 * @return {Function} Throttled function
 */
export function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
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

/**
 * Get computed CSS variable value
 *
 * @param {string} varName - CSS variable name (without --)
 * @return {string} The computed value
 */
export function getCssVar(varName) {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue(`--${varName}`).trim();
}

/**
 * Detect if device is touch-enabled
 * Comprehensive detection across different browsers and devices
 *
 * @return {boolean} True if touch events are supported
 */
export function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0) ||
            (window.DocumentTouch && document instanceof DocumentTouch));
}

/**
 * Detect mobile browsers specifically
 * This is more specific than just touch detection
 *
 * @return {boolean} True if browser is likely on a mobile device
 */
export function isMobileBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
           /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4));
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
