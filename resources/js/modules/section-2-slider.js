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
let navItems = [];

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

    // Get navigation items
    navItems = section2.querySelectorAll('.s2-nav-item');

    // Initialize slides
    slides.forEach((slide, index) => {
        if (index === 0) {
            // First slide is active
            slide.classList.add('active');
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0) scale(1)';

            // Initialize SVG positions for first slide
            const leftEllipse = slide.querySelector('.ellipse-top-left');
            const rightEllipse = slide.querySelector('.ellipse-top-right');

            if (leftEllipse) {
                leftEllipse.style.top = '-70px';
                leftEllipse.style.left = '-70px';
            }

            if (rightEllipse) {
                rightEllipse.style.top = '-70px';
                rightEllipse.style.right = '-70px';
            }
        } else {
            // Other slides are positioned below
            slide.classList.remove('active');
            slide.style.opacity = '0';
            slide.style.transform = `translateY(100%) scale(${SLIDER_CONFIG.startScale})`;

            // Reset SVG positions for other slides
            const leftEllipse = slide.querySelector('.ellipse-top-left');
            const rightEllipse = slide.querySelector('.ellipse-top-right');

            if (leftEllipse) {
                leftEllipse.style.transition = 'none';
                leftEllipse.style.top = '0px';
                leftEllipse.style.left = '-170px';
            }

            if (rightEllipse) {
                rightEllipse.style.transition = 'none';
                rightEllipse.style.top = '0px';
                rightEllipse.style.right = '-170px';
            }
        }
    });

    // Initialize navigation
    initNavigation();

    // Set up intersection observer
    setupIntersectionObserver(section2);

    // Handle visibility changes
    document.addEventListener('visibilitychange', handleVisibilityChange);
}

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    // Skip if no nav items
    if (!navItems.length) return;

    // Add click handlers to navigation items
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (!isAnimating && index !== currentSlideIndex) {
                stopSlider();
                goToSlide(index);
                // Restart slider after transition
                setTimeout(startSlider, SLIDER_CONFIG.transitionTime);
            }
        });
    });
}

/**
 * Update navigation active states - progressive step navigation
 * @param {number} activeIndex - The index of the active slide
 */
function updateNavigation(activeIndex) {
    // Skip if no nav items
    if (!navItems.length) return;

    // Update active classes based on the step-based navigation pattern
    navItems.forEach((item, index) => {
        if (index <= activeIndex) {
            // All nav items up to and including the active slide should be active
            item.classList.add('active');
        } else {
            // All nav items after the active slide should be inactive
            item.classList.remove('active');
        }
    });

    // Handle connecting lines with sequential animation
    // First, remove all line-active classes
    navItems.forEach(item => {
        item.classList.remove('line-active');
    });

    // Then add line-active classes with sequential delays
    if (activeIndex >= 1) {
        // Activate first line immediately
        navItems[0].classList.add('line-active');

        // Activate second line with delay (if we're on slide 2 or 3)
        if (activeIndex >= 2) {
            setTimeout(() => {
                navItems[1].classList.add('line-active');
            }, 250); // 250ms delay

            // Activate third line with additional delay (if we're on slide 3)
            setTimeout(() => {
                navItems[2].classList.add('line-active');
            }, 500); // 500ms delay
        }
    }
}

/**
 * Navigate to a specific slide
 * @param {number} index - The index of the slide to navigate to
 */
function goToSlide(index) {
    if (isAnimating || index === currentSlideIndex || index < 0 || index >= slides.length) return;

    isAnimating = true;

    // Get current and target slides
    const currentSlide = slides[currentSlideIndex];
    const targetSlide = slides[index];

    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
        // Prepare target slide
        targetSlide.style.transition = 'none';
        targetSlide.style.opacity = '1';
        targetSlide.style.transform = `translateY(100%) scale(${SLIDER_CONFIG.startScale})`;
        targetSlide.style.zIndex = '2';

        // Reset SVG positions for target slide
        const nextLeftEllipse = targetSlide.querySelector('.ellipse-top-left');
        const nextRightEllipse = targetSlide.querySelector('.ellipse-top-right');

        if (nextLeftEllipse) {
            nextLeftEllipse.style.transition = 'none';
            nextLeftEllipse.style.top = '0px';
            nextLeftEllipse.style.left = '-170px';
        }

        if (nextRightEllipse) {
            nextRightEllipse.style.transition = 'none';
            nextRightEllipse.style.top = '0px';
            nextRightEllipse.style.right = '-170px';
        }

        // Force reflow
        void targetSlide.offsetWidth;

        // Update navigation
        updateNavigation(index);

        // Use requestAnimationFrame for the actual animation
        requestAnimationFrame(() => {
            // Fade out current slide
            currentSlide.style.transition = `opacity ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
            currentSlide.style.opacity = '0';

            // Animate target slide into position
            targetSlide.style.transition = `transform ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
            targetSlide.style.transform = `translateY(0) scale(${SLIDER_CONFIG.endScale})`;

            // Animate SVG ellipses
            if (nextLeftEllipse) {
                nextLeftEllipse.style.transition = `top ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1), left ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
                nextLeftEllipse.style.top = '-70px';
                nextLeftEllipse.style.left = '-70px';
            }

            if (nextRightEllipse) {
                nextRightEllipse.style.transition = `top ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1), right ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
                nextRightEllipse.style.top = '-70px';
                nextRightEllipse.style.right = '-70px';
            }

            // After animation completes
            setTimeout(() => {
                // Reset current slide
                currentSlide.classList.remove('active');
                currentSlide.style.zIndex = '1';

                // Set new slide as active
                targetSlide.classList.add('active');

                // Update current slide index
                currentSlideIndex = index;

                // Reset animating flag
                isAnimating = false;
            }, SLIDER_CONFIG.transitionTime);
        });
    });
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
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];

    // Update navigation
    updateNavigation(nextIndex);

    // Use requestAnimationFrame for smoother transitions
    requestAnimationFrame(() => {
        // Prepare next slide - position it below with initial scale
        nextSlide.style.transition = 'none';
        nextSlide.style.opacity = '1';
        nextSlide.style.transform = `translateY(100%) scale(${SLIDER_CONFIG.startScale})`;
        nextSlide.style.zIndex = '2';

        // Reset SVG positions for next slide
        const nextLeftEllipse = nextSlide.querySelector('.ellipse-top-left');
        const nextRightEllipse = nextSlide.querySelector('.ellipse-top-right');

        if (nextLeftEllipse) {
            nextLeftEllipse.style.transition = 'none';
            nextLeftEllipse.style.top = '0px';
            nextLeftEllipse.style.left = '-170px';
        }

        if (nextRightEllipse) {
            nextRightEllipse.style.transition = 'none';
            nextRightEllipse.style.top = '0px';
            nextRightEllipse.style.right = '-170px';
        }

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

            // Animate SVG ellipses
            if (nextLeftEllipse) {
                nextLeftEllipse.style.transition = `top ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1), left ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
                nextLeftEllipse.style.top = '-70px';
                nextLeftEllipse.style.left = '-70px';
            }

            if (nextRightEllipse) {
                nextRightEllipse.style.transition = `top ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1), right ${SLIDER_CONFIG.transitionTime}ms cubic-bezier(0.22, 0.61, 0.36, 1)`;
                nextRightEllipse.style.top = '-70px';
                nextRightEllipse.style.right = '-70px';
            }

            // After animation completes
            setTimeout(() => {
                // Reset current slide
                currentSlide.classList.remove('active');
                currentSlide.style.zIndex = '1';

                // Set new slide as active
                nextSlide.classList.add('active');

                // Update current slide index
                currentSlideIndex = nextIndex;

                // Reset animating flag
                isAnimating = false;
            }, SLIDER_CONFIG.transitionTime);
        });
    });
}
