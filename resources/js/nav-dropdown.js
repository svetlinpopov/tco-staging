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
                dropdown.style.opacity = "1";
                dropdown.style.visibility = "visible";
            });

            container.addEventListener('mouseleave', function() {
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
            });
        }

        // For all devices: Toggle on click/touch
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const isVisible = dropdown.style.visibility === "visible";

            // Close any open dropdown first
            if (openDropdown && openDropdown !== dropdown) {
                openDropdown.style.opacity = "0";
                openDropdown.style.visibility = "hidden";
            }

            if (isVisible) {
                dropdown.style.opacity = "0";
                dropdown.style.visibility = "hidden";
                openDropdown = null;
            } else {
                dropdown.style.opacity = "1";
                dropdown.style.visibility = "visible";
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
            dropdown.style.opacity = "0";
            dropdown.style.visibility = "hidden";
        });
        openDropdown = null;
    });

    document.addEventListener('touchend', function() {
        dropdowns.forEach(dropdown => {
            dropdown.style.opacity = "0";
            dropdown.style.visibility = "hidden";
        });
        openDropdown = null;
    }, { passive: true });
}

// Export the function
export { initNavDropdowns };
