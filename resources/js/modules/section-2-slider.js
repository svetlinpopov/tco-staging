/**
 * Section 2 Slider Module
 * Handles the vertical slider animations in section 2
 */

// Configuration for slider
const SLIDER_CONFIG = {
    slideDelay: 5000,      // Time each slide stays visible (ms)
    transitionTime: 1500,  // Duration of the transition animation (ms)
    startScale: 0.75,      // Starting scale for incoming slides (75%)
    endScale: 1            // Final scale (100%)
};

// Track slider state
let sliderInterval = null;
let currentSlideIndex = 0;
let isAnimating = false;
let slides = [];

/**
 * Initialize the section 2 slider functionality
 */
export function initSection2Slider() {
    // Get slider elements
    const section2 = document.getElementById('section2');
    if (!section2) return;

    // Get slider container
    const sliderContainer = section2.querySelector('.image-slider-container');
    if (!sliderContainer) return;

    // Get all slides
    slides = sliderContainer.querySelectorAll('.slider-slide');
    if (slides.length <= 1) return;

    // Initialize slides
    slides.forEach((slide, index) => {
        if (index === 0) {
            // First slide is active
            slide.classList.add('active');
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0) scale(1)';
        } else {
            // Other slides are positioned below
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.transform = `translateY(100%) scale(${SLIDER_CONFIG.startScale})`;
        }
    });

    // Set up intersection observer
    setupIntersectionObserver(section2);

    // Handle visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

/**
 * Set up intersection observer to detect when section 2 is in view
 * @param {HTMLElement} section - The section element to observe
 */
function setupIntersectionObserver(section) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                startSlider();
            } else {
                stopSlider();
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    });

    observer.observe(section);
}

/**
 * Start the slider rotation
 */
function startSlider() {
    if (sliderInterval) return;

    sliderInterval = setInterval(() => {
        if (!isAnimating) {
            rotateSlides();
        }
    }, SLIDER_CONFIG.slideDelay);
}

/**
 * Stop the slider rotation
 */
function stopSlider() {
    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    }
}

/**
 * Handle document visibility changes
 */
function handleVisibilityChange() {
    if (document.hidden) {
        stopSlider();
    } else {
        const section2 = document.getElementById('section2');
        if (section2) {
            const rect = section2.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isVisible) {
                startSlider();
            }
        }
    }
}

/**
 * Rotate to the next slide with animation
 */
function rotateSlides() {
    if (isAnimating || slides.length <= 1) return;

    isAnimating = true;

    // Get current and next slides
    const currentSlide = slides[currentSlideIndex];
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    const nextSlide = slides[currentSlideIndex];

    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
        // Prepare next slide - position it below with initial scale
        nextSlide.style.transition = 'none';
        nextSlide.style.opacity = '1';
        nextSlide.style.transform = `translateY(100%) scale(${SLIDER_CONFIG.startScale})`;
        nextSlide.style.zIndex = '2';

        // Force reflow
        void nextSlide.offsetWidth;

        // Use requestAnimationFrame for the actual animation
        requestAnimationFrame(() => {
            // Fade out current slide
            currentSlide.style.transition = `opacity ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
            currentSlide.style.opacity = '0';

            // Animate next slide into position with easeOutQuart for fast start, slow end
            nextSlide.style.transition = `transform ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
            nextSlide.style.transform = `translateY(0) scale(${SLIDER_CONFIG.endScale})`;

            // After animation completes
            setTimeout(() => {
                // Reset current slide
                currentSlide.classList.remove('active');
                currentSlide.style.zIndex = '1';

                // Set new slide as active
                nextSlide.classList.add('active');

                // Reset animating flag
                isAnimating = false;
            }, SLIDER_CONFIG.transitionTime);
        });
    });
}
