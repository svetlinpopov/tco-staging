import.meta.glob([
    '../img/**',
    '../fonts/**',
]);

document.addEventListener('DOMContentLoaded', function() {
    // Initialize full page scroll functionality
    initFullPageScroll();

    // Initialize side navigation dots
    initSideNavigation();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize header background transition on scroll
    initHeaderBackgroundTransition();
});

/**
 * Initialize full page scroll functionality
 * Now only tracks current section without auto-scrolling
 */
function initFullPageScroll() {
    const sections = document.querySelectorAll('.snap-section');

    if (!sections.length) return;

    let currentSectionIndex = 0;

    // Detect which section is in view
    function getCurrentSection() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        let current = 0;
        let closestDistance = Infinity;

        sections.forEach((section, index) => {
            // Get section's position relative to the viewport
            const rect = section.getBoundingClientRect();

            // Calculate section's middle position relative to the document
            const sectionMiddle = scrollPosition + rect.top + rect.height / 2;

            // Calculate viewport middle
            const viewportMiddle = scrollPosition + windowHeight / 2;

            // Find which section's middle is closest to the viewport middle
            const distance = Math.abs(viewportMiddle - sectionMiddle);

            if (distance < closestDistance) {
                closestDistance = distance;
                current = index;
            }
        });

        return current;
    }

    // Update current section index
    function updateCurrentSection() {
        currentSectionIndex = getCurrentSection();
        // You can dispatch a custom event here if other components need to know about section changes
        const event = new CustomEvent('sectionChanged', { detail: { index: currentSectionIndex } });
        document.dispatchEvent(event);
    }

    // Initialize - find the current section
    updateCurrentSection();

    // Track current section on scroll
    window.addEventListener('scroll', updateCurrentSection, { passive: true });
}

/**
 * Initialize side navigation dots
 */
function initSideNavigation() {
    const dots = document.querySelectorAll('.side-nav-dot');
    const sections = document.querySelectorAll('.snap-section');
    const snapContainer = document.querySelector('.snap-container');

    if (!snapContainer || !dots.length) return;

    // Update active dot based on current section
    function updateActiveDot() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        sections.forEach((section, index) => {
            // Get the position of the section relative to the viewport
            const rect = section.getBoundingClientRect();

            // Calculate section's position relative to the document
            const sectionTop = scrollPosition + rect.top;
            const sectionHeight = rect.height;

            // Consider a section "active" when its middle part is in view
            const sectionMiddle = sectionTop + sectionHeight / 2;
            const viewportMiddle = scrollPosition + windowHeight / 2;

            // Using a more generous tolerance for considering a section active
            const tolerance = windowHeight / 3; // One third of viewport height

            if (Math.abs(viewportMiddle - sectionMiddle) < tolerance) {
                // Remove all status classes from all dots
                dots.forEach(dot => {
                    dot.classList.remove('active', 'active-neighbor-1', 'active-neighbor-2');
                });

                // Add active class to current dot
                dots[index].classList.add('active');

                // Add neighbor classes for dots near the active one
                if (index > 0) {
                    dots[index - 1].classList.add('active-neighbor-1');
                }
                if (index > 1) {
                    dots[index - 2].classList.add('active-neighbor-2');
                }
                if (index < dots.length - 1) {
                    dots[index + 1].classList.add('active-neighbor-1');
                }
                if (index < dots.length - 2) {
                    dots[index + 2].classList.add('active-neighbor-2');
                }
            }
        });
    }

    // Initial update
    updateActiveDot();

    // Update on scroll - using window scroll event instead of container
    window.addEventListener('scroll', updateActiveDot, { passive: true });

    // Add click event to dots for manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target section and scroll to it smoothly
            const targetSection = sections[index];
            const targetPosition = targetSection.offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) return;

    // Toggle mobile menu
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
}

/**
 * Initialize header background transition on scroll
 * Text remains white at all times
 */
function initHeaderBackgroundTransition() {
    const header = document.querySelector('header');

    if (!header) return;

    // Change header background on scroll with opacity transition (slower duration)
    function updateHeaderBackground() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = 100; // Adjust this value to control how quickly the transition happens
        const headerInner = header.querySelector('div');

        // Get computed value of CSS variable
        const style = getComputedStyle(document.documentElement);
        const delRioColor = style.getPropertyValue('--color-del-rio').trim();

        if (scrollTop > 0) {
            // Calculate opacity based on scroll position (0 to 1)
            const opacity = Math.min(scrollTop / maxScroll, 1);

            // Calculate padding based on scroll position (24px to 16px)
            const paddingY = 24 - (opacity * 8); // Start at 24px, end at 16px

            // Update padding
            if (headerInner) {
                headerInner.style.paddingTop = `${paddingY}px`;
                headerInner.style.paddingBottom = `${paddingY}px`;
            }

            // If we have the CSS variable, use it, otherwise fall back to RGB value
            if (delRioColor) {
                // Convert potential hex to rgba
                if (delRioColor.startsWith('#')) {
                    const hex = delRioColor.replace('#', '');
                    const r = parseInt(hex.substring(0, 2), 16);
                    const g = parseInt(hex.substring(2, 4), 16);
                    const b = parseInt(hex.substring(4, 6), 16);
                    header.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
                } else {
                    // For named colors or already rgb format
                    header.style.backgroundColor = `rgba(179, 153, 138, ${opacity})`;
                }
            } else {
                header.style.backgroundColor = `rgba(179, 153, 138, ${opacity})`;
            }

            // Text stays white, no class changes for text color
        } else {
            header.style.backgroundColor = 'transparent';

            // Reset padding to maximum when at top
            if (headerInner) {
                headerInner.style.paddingTop = '24px';
                headerInner.style.paddingBottom = '24px';
            }
        }
    }

    // Listen for scroll events on the window
    window.addEventListener('scroll', updateHeaderBackground, { passive: true });

    // Initialize header state based on initial scroll position
    updateHeaderBackground();
}
