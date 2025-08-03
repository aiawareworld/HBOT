// H-Bot About Us Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('H-Bot About Us page loaded');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const submitBtn = newsletterForm.querySelector('button');
        const emailInput = newsletterForm.querySelector('input');
        
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                // Simulate form submission
                submitBtn.textContent = 'Subscribed!';
                submitBtn.style.background = 'linear-gradient(90deg, #28a745, #20c997)';
                emailInput.value = '';
                
                setTimeout(() => {
                    submitBtn.textContent = 'Subscribe';
                    submitBtn.style.background = 'linear-gradient(90deg, #0883fd, #85cdfb)';
                }, 3000);
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    // Scroll to top functionality
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const navigation = document.querySelector('.nav-container');
        if (window.scrollY > 100) {
            navigation.style.background = 'rgba(1, 5, 16, 0.95)';
        } else {
            navigation.style.background = 'rgba(255, 255, 255, 0.1)';
        }
    });
    
    // Animate service cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and stat items
    const serviceCards = document.querySelectorAll('.service-card');
    const statItems = document.querySelectorAll('.stat-item');
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    statItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Contact button functionality
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // Scroll to footer contact section
            const contactSection = document.querySelector('.footer-column:nth-child(4)');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Simple search simulation - in a real app, this would open a search modal
            const query = prompt('What are you looking for?');
            if (query) {
                alert(`Searching for: ${query}\n\nThis is a demo - search functionality would be implemented here.`);
            }
        });
    }
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add loading animation for images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
});
