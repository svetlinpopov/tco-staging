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
 *
 * @return {boolean} True if touch events are supported
 */
export function isTouchDevice() {
    return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
}
