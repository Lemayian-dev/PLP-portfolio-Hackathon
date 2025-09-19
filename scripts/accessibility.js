// Accessibility and Form Enhancement Script
(function() {
    'use strict';

    // Form validation and accessibility enhancements
    function initFormValidation() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');

        // Real-time validation
        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validateMessage(message) {
            return message.trim().length >= 10;
        }

        function showError(element, errorElement, message) {
            element.classList.add('error');
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }

        function clearError(element, errorElement) {
            element.classList.remove('error');
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }

        // Email validation
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            if (email && !validateEmail(email)) {
                showError(this, emailError, 'Please enter a valid email address');
            } else {
                clearError(this, emailError);
            }
        });

        emailInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                const email = this.value.trim();
                if (validateEmail(email)) {
                    clearError(this, emailError);
                }
            }
        });

        // Message validation
        messageInput.addEventListener('blur', function() {
            const message = this.value.trim();
            if (message && !validateMessage(message)) {
                showError(this, messageError, 'Message must be at least 10 characters long');
            } else {
                clearError(this, messageError);
            }
        });

        messageInput.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                const message = this.value.trim();
                if (validateMessage(message)) {
                    clearError(this, messageError);
                }
            }
        });

        // Form submission validation
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();
            let isValid = true;

            // Clear previous errors
            clearError(emailInput, emailError);
            clearError(messageInput, messageError);

            // Validate email
            if (!email) {
                showError(emailInput, emailError, 'Email is required');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError(emailInput, emailError, 'Please enter a valid email address');
                isValid = false;
            }

            // Validate message
            if (!message) {
                showError(messageInput, messageError, 'Message is required');
                isValid = false;
            } else if (!validateMessage(message)) {
                showError(messageInput, messageError, 'Message must be at least 10 characters long');
                isValid = false;
            }

            if (isValid) {
                submitForm();
            } else {
                // Focus on first error field
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.focus();
                }
            }
        });

        function submitForm() {
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const submitStatus = document.getElementById('submit-status');
            const formData = new FormData(contactForm);

            // Show loading state
            submitButton.disabled = true;
            submitStatus.textContent = 'Sending message...';

            fetch("https://formspree.io/f/mqaqyljj", {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    // Success
                    contactForm.style.display = "none";
                    document.getElementById('form-message-success').style.display = "block";
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                // Error
                document.getElementById('form-message-warning').textContent = 
                    'Sorry, there was an error sending your message. Please try again or contact me directly at lemayian.dev@gmail.com';
                document.getElementById('form-message-warning').style.display = "block";
            })
            .finally(() => {
                submitButton.disabled = false;
                submitStatus.textContent = '';
            });
        }
    }

    // Keyboard navigation enhancements
    function initKeyboardNavigation() {
        // Skip link functionality
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Mobile menu keyboard navigation
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.focus();
                }
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update focus for accessibility
                    target.focus();
                }
            });
        });
    }

    // ARIA live region for dynamic content
    function initLiveRegions() {
        // Create live region for announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);

        // Function to announce messages
        window.announceToScreenReader = function(message) {
            const liveRegion = document.getElementById('live-region');
            if (liveRegion) {
                liveRegion.textContent = message;
            }
        };
    }

    // Initialize all accessibility features
    function init() {
        initFormValidation();
        initKeyboardNavigation();
        initSmoothScrolling();
        initLiveRegions();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for global access
    window.AccessibilityEnhancer = {
        init,
        announceToScreenReader: window.announceToScreenReader
    };
})();
