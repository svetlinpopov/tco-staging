/**
 * Dropdowns Module - With Hover and Click Functionality
 * Supports both hover and click interactions with smooth transitions
 */

// Animation constants
const FADE_DURATION = 300; // in milliseconds
const HOVER_DELAY = 150; // delay before showing dropdown on hover
const HOVER_OUT_DELAY = 300; // delay before hiding dropdown on mouse leave

/**
 * Initialize all dropdown functionality
 */
export function initDropdowns() {
    // First, let's add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .dropdown-menu, .language-dropdown, .nav-dropdown {
            opacity: 0;
            visibility: hidden;
            transition: opacity ${FADE_DURATION}ms ease;
        }

        .dropdown-visible {
            opacity: 1 !important;
            visibility: visible !important;
        }

        .dropdown-hiding {
            opacity: 0 !important;
            visibility: visible !important;
        }
    `;
    document.head.appendChild(style);

    // Track state
    let openDropdown = null;
    let openTrigger = null;
    let openByClick = false; // Whether the current dropdown was opened by click

    // Hover timers
    let hoverInTimer = null;
    let hoverOutTimer = null;

    // Process all dropdown containers
    const containers = document.querySelectorAll('.dropdown-container, .language-dropdown-container, .nav-dropdown-container');

    containers.forEach(container => {
        const trigger = container.querySelector('.dropdown-toggle-label, .btn-lang-selector, .nav-dropdown-trigger, .nav-item');
        const dropdown = container.querySelector('.dropdown-menu, .language-dropdown, .nav-dropdown');

        if (!trigger || !dropdown) return;

        // Handle hover interactions
        container.addEventListener('mouseenter', () => {
            // Clear any pending hide timer
            if (hoverOutTimer) {
                clearTimeout(hoverOutTimer);
                hoverOutTimer = null;
            }

            // Don't interfere if a dropdown is open via click
            if (openDropdown === dropdown && openByClick) {
                return;
            }

            // Set a short delay before showing
            hoverInTimer = setTimeout(() => {
                // If another dropdown is currently open by click, don't change it
                if (openDropdown && openDropdown !== dropdown && openByClick) {
                    return;
                }

                // If another dropdown is open by hover, close it
                if (openDropdown && openDropdown !== dropdown) {
                    fadeOutDropdown(openDropdown);
                }

                // Open this dropdown
                fadeInDropdown(dropdown);
                openDropdown = dropdown;
                openTrigger = trigger;
                openByClick = false;
            }, HOVER_DELAY);
        });

        container.addEventListener('mouseleave', () => {
            // Clear any pending show timer
            if (hoverInTimer) {
                clearTimeout(hoverInTimer);
                hoverInTimer = null;
            }

            // Don't hide if opened by click
            if (openDropdown === dropdown && openByClick) {
                return;
            }

            // Set delay before hiding
            hoverOutTimer = setTimeout(() => {
                if (openDropdown === dropdown && !openByClick) {
                    fadeOutDropdown(dropdown);
                    openDropdown = null;
                    openTrigger = null;
                }
            }, HOVER_OUT_DELAY);
        });

        // Handle click interactions
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Clear any pending timers
            if (hoverInTimer) {
                clearTimeout(hoverInTimer);
                hoverInTimer = null;
            }

            if (hoverOutTimer) {
                clearTimeout(hoverOutTimer);
                hoverOutTimer = null;
            }

            // Toggle dropdown based on current state
            if (openDropdown === dropdown) {
                // If already open, close it
                fadeOutDropdown(dropdown);
                openDropdown = null;
                openTrigger = null;
                openByClick = false;
            } else {
                // If another dropdown is open, close it
                if (openDropdown) {
                    fadeOutDropdown(openDropdown);
                }

                // Open this dropdown
                fadeInDropdown(dropdown);
                openDropdown = dropdown;
                openTrigger = trigger;
                openByClick = true; // Mark as opened by click
            }
        });

        // Stop event propagation inside dropdown
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();

            // If clicked on a link, close after a short delay
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                setTimeout(() => {
                    fadeOutDropdown(dropdown);
                    if (openDropdown === dropdown) {
                        openDropdown = null;
                        openTrigger = null;
                        openByClick = false;
                    }
                }, 100);
            }
        });
    });

    // Handle document clicks to close clicked-open dropdown
    document.addEventListener('click', function(e) {
        // If no dropdown is open or the click was inside the open dropdown, do nothing
        if (!openDropdown || openDropdown.contains(e.target) || (openTrigger && openTrigger.contains(e.target))) {
            return;
        }

        // Only close if it was opened by click
        if (openByClick) {
            fadeOutDropdown(openDropdown);
            openDropdown = null;
            openTrigger = null;
            openByClick = false;
        }
    });

    // Force disable any existing checkbox toggles to prevent conflicts
    document.querySelectorAll('input[type="checkbox"].dropdown-toggle').forEach(checkbox => {
        checkbox.disabled = true;
    });
}

/**
 * Fade in a dropdown with smooth animation
 */
function fadeInDropdown(dropdown) {
    dropdown.classList.remove('dropdown-hiding');
    dropdown.classList.add('dropdown-visible');
}

/**
 * Fade out a dropdown with smooth animation
 */
function fadeOutDropdown(dropdown) {
    dropdown.classList.remove('dropdown-visible');
    dropdown.classList.add('dropdown-hiding');

    setTimeout(() => {
        dropdown.classList.remove('dropdown-hiding');
    }, FADE_DURATION);
}
