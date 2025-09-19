// Advanced Animations and Micro-interactions
(function() {
    'use strict';

    // Typing animation for hero text
    function initTypingAnimation() {
        const typingElement = document.querySelector('.hero-title .name');
        if (!typingElement) return;

        const text = typingElement.textContent;
        typingElement.textContent = '';
        typingElement.style.borderRight = '2px solid var(--primary-color)';
        typingElement.style.animation = 'blink 1s infinite';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    typingElement.style.borderRight = 'none';
                    typingElement.style.animation = 'none';
                }, 1000);
            }
        };

        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    // Parallax scrolling effect
    function initParallaxScrolling() {
        const parallaxElements = document.querySelectorAll('.gradient-orb');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.3;
                element.style.transform = `translateY(${rate * speed}px)`;
            });
        });
    }

    // Enhanced floating animations for multiple elements
    function initFloatingAnimation() {
        // Hero image floating
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            createFloatingAnimation(heroImage, 0.3, 8, 0.2);
        }

        // Project cards floating
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            createFloatingAnimation(card, 0.2 + (index * 0.1), 5, 0.1, 1000 + (index * 200));
        });

        // Skill items floating
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            createFloatingAnimation(item, 0.15 + (index * 0.05), 3, 0.05, 2000 + (index * 100));
        });

        // Blog cards floating (if they exist)
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card, index) => {
            createFloatingAnimation(card, 0.25 + (index * 0.1), 6, 0.15, 1500 + (index * 300));
        });

        // Video cards floating
        const videoCards = document.querySelectorAll('.video-card');
        videoCards.forEach((card, index) => {
            createFloatingAnimation(card, 0.2 + (index * 0.08), 4, 0.1, 1200 + (index * 250));
        });

        // Design items floating
        const designItems = document.querySelectorAll('.design-item');
        designItems.forEach((item, index) => {
            createFloatingAnimation(item, 0.18 + (index * 0.06), 4, 0.08, 800 + (index * 150));
        });

        // Review cards floating
        const reviewCards = document.querySelectorAll('.review');
        reviewCards.forEach((card, index) => {
            createFloatingAnimation(card, 0.22 + (index * 0.07), 5, 0.12, 1800 + (index * 200));
        });

        // CTA section floating
        const ctaSection = document.querySelector('.cta');
        if (ctaSection) {
            createFloatingAnimation(ctaSection, 0.1, 3, 0.05, 3000);
        }

        // Navigation items subtle floating
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach((item, index) => {
            createFloatingAnimation(item, 0.05, 2, 0.03, 4000 + (index * 500));
        });

        // Buttons floating
        const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary');
        buttons.forEach((button, index) => {
            createFloatingAnimation(button, 0.08, 2, 0.04, 2500 + (index * 300));
        });
    }

    // Generic floating animation creator
    function createFloatingAnimation(element, speed = 0.2, amplitude = 5, rotation = 0.1, delay = 0) {
        let floatDirection = 1;
        let floatPosition = 0;
        let rotationDirection = 1;
        let rotationPosition = 0;

        const floatAnimation = () => {
            // Vertical floating
            floatPosition += floatDirection * speed;
            if (floatPosition > amplitude) floatDirection = -1;
            if (floatPosition < -amplitude) floatDirection = 1;

            // Rotation floating
            rotationPosition += rotationDirection * rotation;
            if (rotationPosition > rotation) rotationDirection = -1;
            if (rotationPosition < -rotation) rotationDirection = 1;

            // Apply transforms
            element.style.transform = `translateY(${floatPosition}px) rotate(${rotationPosition}deg)`;
            requestAnimationFrame(floatAnimation);
        };

        // Start animation after delay
        setTimeout(() => {
            requestAnimationFrame(floatAnimation);
        }, delay);
    }

    // Advanced hover effects for project cards
    function initAdvancedHoverEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.02) rotateX(5deg)';
                this.style.boxShadow = '0 25px 50px rgba(107, 95, 255, 0.3)';
                
                // Add glow effect
                this.style.filter = 'drop-shadow(0 0 20px rgba(107, 95, 255, 0.4))';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                this.style.filter = 'none';
            });
        });
    }

    // Skill bars with animated counting
    function initAnimatedSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkillBar = (bar) => {
            const targetWidth = bar.getAttribute('data-width');
            if (!targetWidth) return;
            
            const numericWidth = parseInt(targetWidth);
            let currentWidth = 0;
            const increment = numericWidth / 50;
            
            const animate = () => {
                if (currentWidth < numericWidth) {
                    currentWidth += increment;
                    bar.style.width = currentWidth + '%';
                    requestAnimationFrame(animate);
                } else {
                    bar.style.width = targetWidth;
                }
            };
            
            animate();
        };

        // Intersection Observer for skill bars
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target.querySelector('.skill-progress');
                    if (skillBar) {
                        animateSkillBar(skillBar);
                        skillObserver.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.skill-item').forEach(item => {
            skillObserver.observe(item);
        });
    }

    // Enhanced particle system for background
    function initParticleSystem() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.6';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: 0, y: 0 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticle = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.4 + 0.1,
                originalSize: Math.random() * 3 + 1,
                originalOpacity: Math.random() * 0.4 + 0.1,
                life: Math.random() * 100 + 50
            };
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 80; i++) {
                particles.push(createParticle());
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((particle, index) => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life--;
                
                // Mouse interaction
                const dx = mouse.x - particle.x;
                const dy = mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += (dx / distance) * force * 0.01;
                    particle.vy += (dy / distance) * force * 0.01;
                }
                
                // Boundary check
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                // Life cycle
                if (particle.life <= 0) {
                    particles[index] = createParticle();
                    return;
                }
                
                // Pulsing effect
                particle.size = particle.originalSize + Math.sin(Date.now() * 0.001 + index) * 0.5;
                particle.opacity = particle.originalOpacity + Math.sin(Date.now() * 0.002 + index) * 0.1;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                
                // Gradient effect
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size
                );
                gradient.addColorStop(0, `rgba(107, 95, 255, ${particle.opacity})`);
                gradient.addColorStop(1, `rgba(107, 95, 255, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.fill();
            });
            
            requestAnimationFrame(animateParticles);
        };

        // Mouse tracking
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        resizeCanvas();
        initParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
    }

    // Add floating animations to more elements
    function initAdditionalFloatingAnimations() {
        // Section headers floating
        const sectionHeaders = document.querySelectorAll('h2, h3');
        sectionHeaders.forEach((header, index) => {
            createFloatingAnimation(header, 0.06, 2, 0.02, 5000 + (index * 200));
        });

        // Icons floating
        const icons = document.querySelectorAll('.fas, .fab, .far');
        icons.forEach((icon, index) => {
            createFloatingAnimation(icon, 0.04, 1, 0.01, 6000 + (index * 100));
        });

        // Form elements subtle floating
        const formElements = document.querySelectorAll('.form-control, input, textarea');
        formElements.forEach((element, index) => {
            createFloatingAnimation(element, 0.03, 1, 0.005, 7000 + (index * 150));
        });

        // Logo floating
        const logo = document.querySelector('.logo a');
        if (logo) {
            createFloatingAnimation(logo, 0.1, 3, 0.05, 1000);
        }

        // Theme toggle floating
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            createFloatingAnimation(themeToggle, 0.05, 2, 0.03, 2000);
        }

        // Scroll progress bar floating
        const scrollProgress = document.querySelector('.scroll-progress');
        if (scrollProgress) {
            createFloatingAnimation(scrollProgress, 0.02, 1, 0.01, 8000);
        }
    }

    // Smooth scroll with easing
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const targetPosition = target.offsetTop - 80;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 1000;
                    let start = null;

                    const easeInOutCubic = (t) => {
                        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                    };

                    const animation = (currentTime) => {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const ease = easeInOutCubic(progress);
                        
                        window.scrollTo(0, startPosition + distance * ease);
                        
                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation);
                        }
                    };

                    requestAnimationFrame(animation);
                }
            });
        });
    }

    // Loading animation - removed as requested

    // Initialize all animations
    function init() {
        initTypingAnimation();
        initParallaxScrolling();
        initFloatingAnimation();
        initAdditionalFloatingAnimations();
        initAdvancedHoverEffects();
        initAnimatedSkillBars();
        initParticleSystem();
        initSmoothScroll();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for global access
    window.AnimationController = {
        init,
        initTypingAnimation,
        initParallaxScrolling,
        initFloatingAnimation
    };
})();
