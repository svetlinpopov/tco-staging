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

// Animation settings
const ANIMATION_DURATION = 1750; // 1.75 seconds in milliseconds
const EASING_FUNCTION = easeOutCubic; // Fast start, slow end

/**
 * Initialize section scroll functionality
 */
export function initSectionScroll() {
    // Get all sections
    sections = Array.from(document.querySelectorAll('.snap-section'));
    if (!sections.length) return;

    // Set initial section index based on current scroll position
    setInitialSectionIndex();

    // Add wheel event listener with passive false to allow preventDefault
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
    let newIndex = 0;
    let bestVisibility = 0;

    // Find which section has the highest visibility percentage in viewport
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(scrollTop, sectionTop);
        const visibleBottom = Math.min(scrollTop + window.innerHeight, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Calculate visibility as percentage of section height
        const visibilityPercent = visibleHeight / sectionHeight;

        // If this section has higher visibility, select it
        if (visibilityPercent > bestVisibility) {
            bestVisibility = visibilityPercent;
            newIndex = i;
        }
    }

    // Update current section index
    currentSectionIndex = newIndex;

    console.log('Current section updated to:', currentSectionIndex + 1);
}

/**
 * Handle mouse wheel scroll events
 * @param {WheelEvent} e - The wheel event
 */
function handleScroll(e) {
    // Prevent default scrolling behavior
    e.preventDefault();

    // If already scrolling, ignore additional scroll events
    if (isScrolling) return;

    // Determine scroll direction
    const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

    // Calculate target section index
    const targetIndex = scrollDirection === 'down' ?
        Math.min(currentSectionIndex + 1, sections.length - 1) :
        Math.max(currentSectionIndex - 1, 0);

    // If we can actually move in that direction
    if (targetIndex !== currentSectionIndex) {
        scrollToSection(targetIndex);
    }
}

/**
 * Handle touch scroll events
 * @param {string} direction - The scroll direction ('up' or 'down')
 */
function handleTouchScroll(direction) {
    // If already scrolling, ignore additional scroll events
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

    // Animation variables
    let startTime = null;

    // Cancel any ongoing animation
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }

    // Animation function
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;

        // Calculate elapsed time
        const elapsedTime = currentTime - startTime;

        // If animation should continue
        if (elapsedTime < ANIMATION_DURATION) {
            // Calculate progress with easing
            const progress = EASING_FUNCTION(elapsedTime / ANIMATION_DURATION);

            // Set new scroll position
            window.scrollTo(0, startPosition + distance * progress);

            // Continue animation
            animationFrame = requestAnimationFrame(animate);
        } else {
            // Finish animation exactly at target position
            window.scrollTo(0, targetPosition);

            // Update current section index
            currentSectionIndex = index;

            // Reset scrolling state
            isScrolling = false;
            animationFrame = null;
        }
    }

    // Start animation
    animationFrame = requestAnimationFrame(animate);
}

/**
 * Easing function: Cubic ease-out (fast start, slow end)
 * @param {number} t - Progress from 0 to 1
 * @return {number} Eased progress from 0 to 1
 */
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
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
