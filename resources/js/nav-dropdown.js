/**
 * Navigation Dropdown Functionality
 */
function initNavDropdowns() {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    if (!dropdowns.length) return;

    // Track open dropdown for mobile
    let openDropdown = null;

    dropdowns.forEach(dropdown => {
        const container = dropdown.parentNode;
        const trigger = container.querySelector('.nav-dropdown-trigger');

        if (!trigger || !container) return;

        // For desktop: Show dropdown on hover
        if (window.matchMedia('(min-width: 1024px)').matches) {
            container.addEventListener('mouseenter', function() {
                dropdown.style.visibility = 'visible';
                // Use a small timeout to ensure the visibility change takes effect first
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                }, 10);
            });

            container.addEventListener('mouseleave', function() {
                dropdown.style.opacity = '0';
                // Wait for fade-out before hiding
                setTimeout(() => {
                    dropdown.style.visibility = 'hidden';
                }, 500);
            });
        }

        // For all devices: Toggle on click/touch
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isVisible = dropdown.style.visibility === 'visible';

            // Close any open dropdown first
            if (openDropdown && openDropdown !== dropdown) {
                openDropdown.style.opacity = '0';
                // Wait for fade-out before hiding
                setTimeout(() => {
                    openDropdown.style.visibility = 'hidden';
                }, 500);
            }

            if (isVisible) {
                dropdown.style.opacity = '0';
                // Wait for fade-out before hiding
                setTimeout(() => {
                    dropdown.style.visibility = 'hidden';
                }, 500);
                openDropdown = null;
            } else {
                dropdown.style.visibility = 'visible';
                // Use a small timeout to ensure the visibility change takes effect first
                setTimeout(() => {
                    dropdown.style.opacity = '1';
                }, 10);
                openDropdown = dropdown;
            }
        });

        // Ensure touch events work properly
        trigger.addEventListener('touchend', function(e) {
            e.preventDefault(); // Prevent ghost clicks
        }, { passive: false });
    });

    // Hide all dropdowns when clicking/touching elsewhere
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            dropdown.style.opacity = '0';
            // Wait for fade-out before hiding
            setTimeout(() => {
                dropdown.style.visibility = 'hidden';
            }, 500);
        });
        openDropdown = null;
    });

    document.addEventListener('touchend', function() {
        dropdowns.forEach(dropdown => {
            dropdown.style.opacity = '0';
            // Wait for fade-out before hiding
            setTimeout(() => {
                dropdown.style.visibility = 'hidden';
            }, 500);
        });
        openDropdown = null;
    }, { passive: true });
}

// Export the function
export { initNavDropdowns };
