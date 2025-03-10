/**
 * Side Navigation Module
 * Handles the side dot navigation and section tracking
 */

// Helper to debounce function calls
function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Initialize side navigation functionality
 */
export function initSideNavigation() {
    const dots = document.querySelectorAll('.side-nav-dot');
    const sections = document.querySelectorAll('.snap-section');

    if (!dots.length || !sections.length) return;

    // Cache window height for performance
    let windowHeight = window.innerHeight;

    // Update window height on resize
    window.addEventListener('resize', () => {
        windowHeight = window.innerHeight;
    }, { passive: true });

    // Update active dot based on current section
    const updateActiveDot = () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Find the section closest to the middle of the viewport
        let closestSectionIndex = 0;
        let closestDistance = Infinity;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const sectionMiddle = scrollPosition + rect.top + rect.height / 2;
            const viewportMiddle = scrollPosition + windowHeight / 2;
            const distance = Math.abs(viewportMiddle - sectionMiddle);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestSectionIndex = index;
            }
        });

        // Update dot classes
        dots.forEach((dot, index) => {
            // Remove all status classes
            dot.classList.remove('active', 'active-neighbor-1', 'active-neighbor-2');

            // Add appropriate class based on distance from active section
            if (index === closestSectionIndex) {
                dot.classList.add('active');
            } else if (Math.abs(index - closestSectionIndex) === 1) {
                dot.classList.add('active-neighbor-1');
            } else if (Math.abs(index - closestSectionIndex) === 2) {
                dot.classList.add('active-neighbor-2');
            }
        });

        // Dispatch event for other components
        document.dispatchEvent(new CustomEvent('sectionChanged', {
            detail: { index: closestSectionIndex }
        }));
    };

    // Add click event to dots for navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = sections[index];

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize and add scroll listener with debounce
    updateActiveDot();
    window.addEventListener('scroll', debounce(updateActiveDot), { passive: true });
}
