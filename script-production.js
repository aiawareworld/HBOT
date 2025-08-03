// H-Bot About Us Page - Production JavaScript
(function() {
    'use strict';

    // DOM Content Loaded
    document.addEventListener('DOMContentLoaded', function() {
        initializeApp();
    });

    function initializeApp() {
        // Initialize all components
        initScrollToTop();
        initSmoothScrolling();
        initStatsCounter();
        initFormHandling();
        initImageLazyLoading();
        initIntersectionObserver();
        initAccessibility();
        
        // Performance monitoring
        monitorPerformance();
        
        console.log('H-Bot About Us page initialized successfully');
    }

    // Scroll to Top Functionality
    function initScrollToTop() {
        const scrollButton = document.querySelector('.scroll-to-top');
        
        if (!scrollButton) return;

        // Show/hide scroll button based on scroll position
        function toggleScrollButton() {
            if (window.pageYOffset > 300) {
                scrollButton.style.opacity = '1';
                scrollButton.style.visibility = 'visible';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.visibility = 'hidden';
            }
        }

        // Initial state
        scrollButton.style.opacity = '0';
        scrollButton.style.visibility = 'hidden';
        scrollButton.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

        // Scroll event listener with throttling
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(toggleScrollButton, 10);
        });

        // Click event listener
        scrollButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scrolling for Navigation Links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    const offsetTop = targetSection.offsetTop - 100; // Account for fixed nav
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Animated Counter for Stats
    function initStatsCounter() {
        const statValues = document.querySelectorAll('.stat-value');
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -10% 0px'
        };

        function animateValue(element, start, end, duration, suffix = '') {
            const startTime = performance.now();
            const startValue = start;
            const endValue = end;
            
            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function (ease-out)
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
                
                element.textContent = currentValue + suffix;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            requestAnimationFrame(update);
        }

        function handleIntersection(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    const target = parseInt(entry.target.dataset.target) || 0;
                    const suffix = entry.target.textContent.includes('%') ? '%' : 
                                  entry.target.textContent.includes('+') ? '+' : '';
                    
                    entry.target.dataset.animated = 'true';
                    animateValue(entry.target, 0, target, 2000, suffix);
                    
                    // Add animation class for additional effects
                    entry.target.style.animation = 'countUp 0.6s ease-out';
                }
            });
        }

        if (statValues.length > 0) {
            const observer = new IntersectionObserver(handleIntersection, observerOptions);
            statValues.forEach(function(stat) {
                observer.observe(stat);
            });
        }
    }

    // Form Handling
    function initFormHandling() {
        const newsletterForm = document.querySelector('.newsletter-form');
        
        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.newsletter-input');
            const submitButton = this.querySelector('.newsletter-btn');
            const email = emailInput.value.trim();
            
            // Basic email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                emailInput.focus();
                return;
            }
            
            // Simulate form submission
            submitButton.textContent = 'Subscribing...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(function() {
                showNotification('Thank you for subscribing!', 'success');
                emailInput.value = '';
                submitButton.textContent = 'Subscribe';
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'error' ? '#dc2626' : '#059669',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Auto remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 4000);
    }

    // Lazy Loading for Images
    function initImageLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if (images.length === 0) return;

        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                    
                    img.addEventListener('load', function() {
                        img.style.opacity = '1';
                    });
                }
            });
        });

        images.forEach(function(img) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            imageObserver.observe(img);
        });
    }

    // Intersection Observer for Animations
    function initIntersectionObserver() {
        const animatedElements = document.querySelectorAll('.service-card, .mission-section, .vision-section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -5% 0px'
        };

        function handleIntersection(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    entry.target.dataset.animated = 'true';
                }
            });
        }

        if (animatedElements.length > 0) {
            const observer = new IntersectionObserver(handleIntersection, observerOptions);
            animatedElements.forEach(function(element) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                observer.observe(element);
            });
        }
    }

    // Accessibility Enhancements
    function initAccessibility() {
        // Keyboard navigation for buttons
        const buttons = document.querySelectorAll('button, .nav-item, .footer-link');
        
        buttons.forEach(function(button) {
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });

        // Skip link for keyboard users
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        
        Object.assign(skipLink.style, {
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: '#0883fd',
            color: 'white',
            padding: '8px',
            textDecoration: 'none',
            borderRadius: '4px',
            zIndex: '10001',
            transition: 'top 0.3s ease'
        });
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content landmark
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.id = 'main-content';
            heroSection.setAttribute('tabindex', '-1');
        }
    }

    // Performance Monitoring
    function monitorPerformance() {
        if (!('performance' in window)) return;

        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                if (loadTime > 3000) {
                    console.warn('Page load time is high:', loadTime + 'ms');
                } else {
                    console.log('Page load time:', loadTime + 'ms');
                }
                
                // Report Core Web Vitals if available
                if ('web-vital' in window) {
                    // This would integrate with real monitoring service
                    console.log('Core Web Vitals monitoring enabled');
                }
            }, 0);
        });
    }

    // Service Worker Registration (for future PWA features)
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('Service Worker registered successfully');
                })
                .catch(function(error) {
                    console.log('Service Worker registration failed');
                });
        }
    }

    // Error Handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // In production, you would send this to an error reporting service
    });

    // Graceful degradation check
    function checkBrowserSupport() {
        const isSupported = 
            'IntersectionObserver' in window &&
            'requestAnimationFrame' in window &&
            'addEventListener' in window;
            
        if (!isSupported) {
            console.warn('Some features may not work in this browser');
            // Provide fallbacks for older browsers
            document.body.classList.add('legacy-browser');
        }
    }

    // Initialize browser support check
    checkBrowserSupport();

    // Expose utility functions globally if needed
    window.HBot = {
        showNotification: showNotification,
        isValidEmail: isValidEmail
    };

})();
