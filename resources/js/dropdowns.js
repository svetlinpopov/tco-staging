/**
 * Initialize all dropdown menus
 */
function initDropdowns() {
    // Initialize nav dropdown menus
    initNavDropdowns();

    // Initialize language dropdown menu
    initLanguageDropdown();
}

/**
 * Initialize navigation dropdown menus
 */
function initNavDropdowns() {
    const containers = document.querySelectorAll('.nav-dropdown-container');

    containers.forEach(container => {
        const trigger = container.querySelector('.nav-dropdown-trigger');
        const dropdown = container.querySelector('.nav-dropdown');

        if (!trigger || !dropdown) return;

        // Show dropdown on hover (desktop)
        container.addEventListener('mouseenter', function() {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
        });

        container.addEventListener('mouseleave', function() {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        });

        // Toggle on click (all devices)
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isVisible = dropdown.style.visibility === 'visible';

            if (isVisible) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
            } else {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
            }
        });

        // Handle touch on mobile
        trigger.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        }, { passive: true });
    });

    // Close all dropdowns when clicking elsewhere
    document.addEventListener('click', function() {
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        });
    });
}

/**
 * Initialize language dropdown menu
 */
function initLanguageDropdown() {
    const container = document.querySelector('.language-dropdown-container');

    if (!container) return;

    const button = container.querySelector('.btn-lang-selector');
    const dropdown = container.querySelector('.language-dropdown');

    if (!button || !dropdown) return;

    // Show dropdown on hover (desktop)
    container.addEventListener('mouseenter', function() {
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
    });

    container.addEventListener('mouseleave', function() {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
    });

    // Toggle on click (all devices)
    button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const isVisible = dropdown.style.visibility === 'visible';

        if (isVisible) {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        } else {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
        }
    });

    // Handle touch on mobile
    button.addEventListener('touchstart', function(e) {
        e.preventDefault();

        const isVisible = dropdown.style.visibility === 'visible';

        if (isVisible) {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        } else {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
        }
    }, { passive: false });

    // Close dropdown when clicking elsewhere
    document.addEventListener('click', function() {
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
    });
}

// Export the init function
export { initDropdowns };
