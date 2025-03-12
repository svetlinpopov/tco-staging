/**
 * Mobile Menu Toggle
 * Simple direct manipulation of mobile menu visibility
 */

export function initMenuToggle() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuToggleText = document.getElementById('menu-toggle-text');

    if (!menuButton || !mobileMenu || !menuToggleText) return;

    let isMenuOpen = false;

    // Toggle menu visibility
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            // Open menu
            mobileMenu.style.display = 'flex';
            setTimeout(() => mobileMenu.classList.add('menu-open'), 10);
            menuToggleText.textContent = 'Close';
            document.body.classList.add('overflow-hidden');
        } else {
            // Close menu
            mobileMenu.classList.remove('menu-open');
            setTimeout(() => {
                mobileMenu.style.display = 'none';
                document.body.classList.remove('overflow-hidden');
            }, 300);
            menuToggleText.textContent = 'Menu';
        }

        // Force button to remain white
        menuButton.style.color = 'white';
        menuButton.style.borderColor = 'white';
    }

    // Add event listener to button
    menuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // Handle window resize - ensure menu state is correct when switching between mobile and desktop
    window.addEventListener('resize', () => {
        // If window width becomes larger than 1024px and menu is open, close it
        if (window.innerWidth > 1024 && isMenuOpen) {
            toggleMenu();
        }
    });
}
