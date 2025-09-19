// Performance Optimization Script
(function() {
    'use strict';

    // Lazy loading implementation
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = [
            'images/Portrait1.jpg',
            'images/Isaac_Lemayian.jpg'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Optimize scroll performance
    function optimizeScrollPerformance() {
        let ticking = false;
        
        function updateScrollProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            const progressBar = document.getElementById('scroll-progress');
            if (progressBar) {
                progressBar.style.width = scrollPercent + '%';
                progressBar.setAttribute('aria-valuenow', Math.round(scrollPercent));
            }
            
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick, { passive: true });
    }

    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Optimize theme toggle performance
    function optimizeThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', debounce(() => {
                const body = document.body;
                const isLight = body.classList.contains('light-theme');
                
                if (isLight) {
                    body.classList.remove('light-theme');
                    themeToggle.setAttribute('aria-pressed', 'false');
                    themeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
                    localStorage.setItem('theme', 'dark');
                } else {
                    body.classList.add('light-theme');
                    themeToggle.setAttribute('aria-pressed', 'true');
                    themeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
                    localStorage.setItem('theme', 'light');
                }
            }, 100));
        }
    }

    // Initialize performance optimizations
    function init() {
        preloadCriticalResources();
        initLazyLoading();
        optimizeScrollPerformance();
        optimizeThemeToggle();
        
        // Load theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.setAttribute('aria-pressed', 'true');
                themeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
            }
        }
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Export for global access
    window.PerformanceOptimizer = {
        init,
        debounce
    };
})();
