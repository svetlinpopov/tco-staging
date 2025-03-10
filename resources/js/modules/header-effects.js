/**
 * Header Effects Module
 * Handles header appearance changes on scroll
 */

// Helper to debounce function calls
function debounce(func, wait = 10) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Helper to convert hex to rgba
function hexToRgba(hex, alpha = 1) {
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
 * Initialize header background transition on scroll
 */
export function initHeaderEffects() {
    const header = document.querySelector('header');
    if (!header) return;

    const headerInner = header.querySelector('.header-padding');

    // Get CSS variable values
    const style = getComputedStyle(document.documentElement);
    const delRioColor = style.getPropertyValue('--color-del-rio').trim();

    // Constants for transitions
    const MAX_SCROLL = 100;
    const MAX_PADDING = 24;
    const MIN_PADDING = 16;

    // Update header appearance based on scroll position
    const updateHeader = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 0) {
            // Calculate opacity and padding based on scroll
            const progress = Math.min(scrollTop / MAX_SCROLL, 1);
            const padding = MAX_PADDING - (progress * (MAX_PADDING - MIN_PADDING));

            // Update padding
            if (headerInner) {
                headerInner.style.paddingTop = `${padding}px`;
                headerInner.style.paddingBottom = `${padding}px`;
            }

            // Update background color with opacity
            if (delRioColor) {
                const bgColor = delRioColor.startsWith('#') ?
                    hexToRgba(delRioColor, progress) :
                    `rgba(179, 153, 138, ${progress})`;

                header.style.backgroundColor = bgColor;
            } else {
                header.style.backgroundColor = `rgba(179, 153, 138, ${progress})`;
            }
        } else {
            // Reset styles when at top
            header.style.backgroundColor = 'transparent';

            if (headerInner) {
                headerInner.style.paddingTop = `${MAX_PADDING}px`;
                headerInner.style.paddingBottom = `${MAX_PADDING}px`;
            }
        }
    };

    // Add scroll listener with debounce
    window.addEventListener('scroll', debounce(updateHeader), { passive: true });

    // Initialize header state
    updateHeader();
}
