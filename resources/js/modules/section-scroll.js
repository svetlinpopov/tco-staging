/**
 * Section Scroll Module
 * Handles smooth scrolling between full-height sections on the homepage
 * Creates a section-by-section navigation experience with customized animation
 */

// Track the current section and scroll state
let currentSectionIndex = 0;
let isScrolling = false;
let sections = [];
let animationFrame = null;
let lastWheelTime = 0;

// Animation settings
const ANIMATION_DURATION = 1750; // Set back to original duration for smoother effect
const WHEEL_COOLDOWN = 1750; // ms to wait between wheel events - prevents rapid triggering

/**
 * Initialize section scroll functionality
 */
export function initSectionScroll() {
    // Get all sections
    sections = Array.from(document.querySelectorAll('.snap-section'));
    if (!sections.length) return;

    // Set initial section index based on current scroll position
    setInitialSectionIndex();

    // Add wheel event listener with passive false to allow preventDefault only when needed
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Add touch events for mobile
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;

        // If touch movement is significant, treat as scroll
        if (Math.abs(touchDiff) > 50) {
            handleTouchScroll(touchDiff > 0 ? 'down' : 'up');
        }
    }, { passive: true });

    // Handle keyboard navigation
    window.addEventListener('keydown', (e) => {
        // Arrow up/down or Page up/down
        if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            scrollToSection(currentSectionIndex - 1);
        } else if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            scrollToSection(currentSectionIndex + 1);
        }
    });

    // Update current section on window resize
    window.addEventListener('resize', debounce(() => {
        if (!isScrolling) {
            setInitialSectionIndex();
        }
    }, 100));

    // Add scroll event listener to detect manual scrolling with scrollbar
    // and update current section index accordingly
    window.addEventListener('scroll', debounce(() => {
        // Only update if not in the middle of a programmatic scroll
        if (!isScrolling) {
            setInitialSectionIndex();
        }
    }, 150), { passive: true });
}

/**
 * Set the initial section index based on scroll position
 * This is used both for initialization and to track manual scrolling
 */
function setInitialSectionIndex() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const viewportMiddle = scrollTop + (viewportHeight / 2);

    // Find which section contains the middle of the viewport
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
            currentSectionIndex = i;
            break;
        }
    }
}

/**
 * Handle mouse wheel scroll events
 * @param {WheelEvent} e - The wheel event
 */
function handleScroll(e) {
    // Check if wheel event is within cooldown period to prevent over-triggering
    const now = Date.now();
    if (now - lastWheelTime < WHEEL_COOLDOWN || isScrolling) {
        return;
    }

    // Update last wheel time
    lastWheelTime = now;

    // Determine scroll direction (normalized for different browsers/devices)
    const delta = e.deltaY || -e.wheelDelta || e.detail;
    const scrollDirection = delta > 0 ? 'down' : 'up';

    // Calculate target section index
    const targetIndex = scrollDirection === 'down' ?
        Math.min(currentSectionIndex + 1, sections.length - 1) :
        Math.max(currentSectionIndex - 1, 0);

    // If we can actually move in that direction
    if (targetIndex !== currentSectionIndex) {
        e.preventDefault(); // Only prevent default when we're actually changing sections
        scrollToSection(targetIndex);
    }
}

/**
 * Handle touch scroll events
 * @param {string} direction - The scroll direction ('up' or 'down')
 */
function handleTouchScroll(direction) {
    // If already scrolling, ignore additional events
    if (isScrolling) return;

    // Calculate target section index
    const targetIndex = direction === 'down' ?
        Math.min(currentSectionIndex + 1, sections.length - 1) :
        Math.max(currentSectionIndex - 1, 0);

    // If we can actually move in that direction
    if (targetIndex !== currentSectionIndex) {
        scrollToSection(targetIndex);
    }
}

/**
 * Scroll to a specific section
 * @param {number} index - The index of the target section
 */
function scrollToSection(index) {
    // Validate index
    if (index < 0 || index >= sections.length || index === currentSectionIndex) return;

    // Set scrolling state
    isScrolling = true;

    // Get target section and its position
    const targetSection = sections[index];
    const targetPosition = targetSection.offsetTop;

    // Get current scroll position
    const startPosition = window.scrollY || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;

    // Cancel any ongoing animation
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }

    // Animation variables
    let startTime = null;

    // Animation function
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;

        // Calculate elapsed time
        const elapsedTime = currentTime - startTime;

        // If animation should continue
        if (elapsedTime < ANIMATION_DURATION) {
            // Calculate progress with easing
            const progress = easeOutCubic(elapsedTime / ANIMATION_DURATION);

            // Set new scroll position
            window.scrollTo(0, startPosition + distance * progress);

            // Continue animation
            animationFrame = requestAnimationFrame(animate);
        } else {
            // Finish animation exactly at target position
            window.scrollTo(0, targetPosition);

            // Update current section index
            currentSectionIndex = index;

            // Reset scrolling state after a brief delay to prevent immediate re-triggering
            setTimeout(() => {
                isScrolling = false;
                animationFrame = null;
            }, 100);
        }
    }

    // Start animation
    animationFrame = requestAnimationFrame(animate);
}

/**
 * Easing function: Quintic ease-out (very fast start, pronounced slow down at the end)
 * @param {number} t - Progress from 0 to 1
 * @return {number} Eased progress from 0 to 1
 */
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 5);
}

/**
 * Debounce function to limit rapid successive calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Debounce wait time in milliseconds
 * @return {Function} Debounced function
 */
function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
