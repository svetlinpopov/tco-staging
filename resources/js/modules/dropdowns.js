/**
 * Dropdowns Module
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
    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .dropdown-menu, .language-dropdown, .nav-dropdown, .language-dropup {
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
    let openByClick = false;

    // Hover timers
    let hoverInTimer = null;
    let hoverOutTimer = null;

    // Process all dropdown containers
    const containers = document.querySelectorAll(
        '.dropdown-container, .language-dropdown-container, .nav-dropdown-container, .mobile-language-dropdown-container'
    );

    containers.forEach(container => {
        const trigger = container.querySelector(
            '.dropdown-toggle-label, .btn-lang-selector, .btn-mobile-lang-selector, .nav-dropdown-trigger, .nav-item'
        );
        const dropdown = container.querySelector(
            '.dropdown-menu, .language-dropdown, .nav-dropdown, .language-dropup'
        );

        if (!trigger || !dropdown) return;

        // Skip hover functionality for mobile language dropup
        const isMobileDropup = container.classList.contains('mobile-language-dropdown-container');

        // Handle hover interactions
        if (!isMobileDropup) {
            container.addEventListener('mouseenter', () => {
                if (hoverOutTimer) {
                    clearTimeout(hoverOutTimer);
                    hoverOutTimer = null;
                }

                if (openDropdown === dropdown && openByClick) {
                    return;
                }

                hoverInTimer = setTimeout(() => {
                    if (openDropdown && openDropdown !== dropdown && openByClick) {
                        return;
                    }

                    if (openDropdown && openDropdown !== dropdown) {
                        fadeOutDropdown(openDropdown);
                    }

                    fadeInDropdown(dropdown);
                    openDropdown = dropdown;
                    openTrigger = trigger;
                    openByClick = false;
                }, HOVER_DELAY);
            });

            container.addEventListener('mouseleave', () => {
                if (hoverInTimer) {
                    clearTimeout(hoverInTimer);
                    hoverInTimer = null;
                }

                if (openDropdown === dropdown && openByClick) {
                    return;
                }

                hoverOutTimer = setTimeout(() => {
                    if (openDropdown === dropdown && !openByClick) {
                        fadeOutDropdown(dropdown);
                        openDropdown = null;
                        openTrigger = null;
                    }
                }, HOVER_OUT_DELAY);
            });
        }

        // Handle click interactions
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if (hoverInTimer) {
                clearTimeout(hoverInTimer);
                hoverInTimer = null;
            }

            if (hoverOutTimer) {
                clearTimeout(hoverOutTimer);
                hoverOutTimer = null;
            }

            if (openDropdown === dropdown) {
                fadeOutDropdown(dropdown);
                openDropdown = null;
                openTrigger = null;
                openByClick = false;
            } else {
                if (openDropdown) {
                    fadeOutDropdown(openDropdown);
                }

                fadeInDropdown(dropdown);
                openDropdown = dropdown;
                openTrigger = trigger;
                openByClick = true;
            }
        });

        // Stop event propagation inside dropdown
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();

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
        if (!openDropdown || openDropdown.contains(e.target) || (openTrigger && openTrigger.contains(e.target))) {
            return;
        }

        if (openByClick) {
            fadeOutDropdown(openDropdown);
            openDropdown = null;
            openTrigger = null;
            openByClick = false;
        }
    });

    // Disable any existing checkbox toggles to prevent conflicts
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
