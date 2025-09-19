// Advanced Analytics and Performance Monitoring
(function() {
    'use strict';

    // Analytics configuration
    const analyticsConfig = {
        googleAnalyticsId: 'G-BWRQR0BTNT',
        enablePerformanceMonitoring: true,
        enableUserBehaviorTracking: true,
        enableErrorTracking: true,
        enableConversionTracking: true
    };

    // Performance metrics
    const performanceMetrics = {
        pageLoadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToInteractive: 0
    };

    // User behavior tracking
    const userBehavior = {
        scrollDepth: 0,
        timeOnPage: 0,
        clicks: 0,
        formInteractions: 0,
        projectViews: 0,
        contactAttempts: 0
    };

    // Initialize analytics
    function initAnalytics() {
        if (analyticsConfig.enablePerformanceMonitoring) {
            initPerformanceMonitoring();
        }
        
        if (analyticsConfig.enableUserBehaviorTracking) {
            initUserBehaviorTracking();
        }
        
        if (analyticsConfig.enableErrorTracking) {
            initErrorTracking();
        }
        
        if (analyticsConfig.enableConversionTracking) {
            initConversionTracking();
        }
    }

    // Performance monitoring
    function initPerformanceMonitoring() {
        // Core Web Vitals
        if ('PerformanceObserver' in window) {
            // First Contentful Paint
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.name === 'first-contentful-paint') {
                        performanceMetrics.firstContentfulPaint = entry.startTime;
                        trackEvent('Performance', 'First Contentful Paint', Math.round(entry.startTime));
                    }
                }
            }).observe({ entryTypes: ['paint'] });

            // Largest Contentful Paint
            new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                performanceMetrics.largestContentfulPaint = lastEntry.startTime;
                trackEvent('Performance', 'Largest Contentful Paint', Math.round(lastEntry.startTime));
            }).observe({ entryTypes: ['largest-contentful-paint'] });

            // First Input Delay
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    performanceMetrics.firstInputDelay = entry.processingStart - entry.startTime;
                    trackEvent('Performance', 'First Input Delay', Math.round(performanceMetrics.firstInputDelay));
                }
            }).observe({ entryTypes: ['first-input'] });

            // Cumulative Layout Shift
            new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        performanceMetrics.cumulativeLayoutShift += entry.value;
                    }
                }
                trackEvent('Performance', 'Cumulative Layout Shift', Math.round(performanceMetrics.cumulativeLayoutShift * 1000) / 1000);
            }).observe({ entryTypes: ['layout-shift'] });
        }

        // Page load time
        window.addEventListener('load', () => {
            performanceMetrics.pageLoadTime = performance.now();
            trackEvent('Performance', 'Page Load Time', Math.round(performanceMetrics.pageLoadTime));
        });

        // Time to Interactive (approximation)
        let interactiveTime = 0;
        const checkInteractive = () => {
            if (document.readyState === 'complete' && performanceMetrics.firstInputDelay > 0) {
                interactiveTime = performance.now();
                performanceMetrics.timeToInteractive = interactiveTime;
                trackEvent('Performance', 'Time to Interactive', Math.round(interactiveTime));
            } else {
                requestAnimationFrame(checkInteractive);
            }
        };
        checkInteractive();
    }

    // User behavior tracking
    function initUserBehaviorTracking() {
        let startTime = Date.now();
        let maxScrollDepth = 0;

        // Track scroll depth
        const trackScrollDepth = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);
            
            if (scrollPercent > maxScrollDepth) {
                maxScrollDepth = scrollPercent;
                userBehavior.scrollDepth = maxScrollDepth;
                
                // Track milestone scroll depths
                if (scrollPercent >= 25 && scrollPercent < 50) {
                    trackEvent('Engagement', 'Scroll Depth', '25%');
                } else if (scrollPercent >= 50 && scrollPercent < 75) {
                    trackEvent('Engagement', 'Scroll Depth', '50%');
                } else if (scrollPercent >= 75 && scrollPercent < 90) {
                    trackEvent('Engagement', 'Scroll Depth', '75%');
                } else if (scrollPercent >= 90) {
                    trackEvent('Engagement', 'Scroll Depth', '90%+');
                }
            }
        };

        window.addEventListener('scroll', throttle(trackScrollDepth, 1000));

        // Track time on page
        const trackTimeOnPage = () => {
            userBehavior.timeOnPage = Math.round((Date.now() - startTime) / 1000);
            
            // Track time milestones
            if (userBehavior.timeOnPage === 30) {
                trackEvent('Engagement', 'Time on Page', '30 seconds');
            } else if (userBehavior.timeOnPage === 60) {
                trackEvent('Engagement', 'Time on Page', '1 minute');
            } else if (userBehavior.timeOnPage === 300) {
                trackEvent('Engagement', 'Time on Page', '5 minutes');
            }
        };

        setInterval(trackTimeOnPage, 1000);

        // Track clicks
        document.addEventListener('click', (e) => {
            userBehavior.clicks++;
            
            const target = e.target;
            const tagName = target.tagName.toLowerCase();
            const className = target.className;
            const id = target.id;
            
            // Track specific interactions
            if (target.matches('a[href^="#"]')) {
                trackEvent('Navigation', 'Internal Link Click', target.getAttribute('href'));
            } else if (target.matches('a[href^="http"]')) {
                trackEvent('Navigation', 'External Link Click', target.href);
            } else if (target.matches('button, .btn')) {
                trackEvent('Interaction', 'Button Click', className || id || tagName);
            } else if (target.matches('.project-card, .project-link')) {
                userBehavior.projectViews++;
                trackEvent('Engagement', 'Project View', target.querySelector('h3')?.textContent || 'Unknown');
            }
        });

        // Track form interactions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', () => {
                userBehavior.formInteractions++;
                trackEvent('Engagement', 'Form Submission', form.id || 'Unknown Form');
            });
        });

        // Track contact attempts
        const contactButtons = document.querySelectorAll('a[href="#contact"], .contact-btn');
        contactButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                userBehavior.contactAttempts++;
                trackEvent('Conversion', 'Contact Attempt', 'Contact Button Click');
            });
        });
    }

    // Error tracking
    function initErrorTracking() {
        // JavaScript errors
        window.addEventListener('error', (e) => {
            trackEvent('Error', 'JavaScript Error', `${e.message} at ${e.filename}:${e.lineno}:${e.colno}`);
        });

        // Promise rejections
        window.addEventListener('unhandledrejection', (e) => {
            trackEvent('Error', 'Unhandled Promise Rejection', e.reason?.toString() || 'Unknown error');
        });

        // Resource loading errors
        window.addEventListener('error', (e) => {
            if (e.target !== window) {
                trackEvent('Error', 'Resource Loading Error', `${e.target.tagName}: ${e.target.src || e.target.href}`);
            }
        }, true);
    }

    // Conversion tracking
    function initConversionTracking() {
        // Track newsletter signups
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', () => {
                trackEvent('Conversion', 'Newsletter Signup', 'Newsletter Form');
            });
        }

        // Track resume downloads
        const downloadButtons = document.querySelectorAll('a[download]');
        downloadButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                trackEvent('Conversion', 'Resume Download', 'Resume Download');
            });
        });

        // Track project demo views
        const demoButtons = document.querySelectorAll('.demo-btn');
        demoButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                trackEvent('Conversion', 'Project Demo View', 'Demo Button Click');
            });
        });
    }

    // Enhanced Google Analytics tracking
    function trackEvent(category, action, label, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }

        // Console logging for development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log(`Analytics: ${category} - ${action} - ${label}${value ? ` - ${value}` : ''}`);
        }
    }

    // Utility function for throttling
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Performance report
    function generatePerformanceReport() {
        return {
            performance: performanceMetrics,
            behavior: userBehavior,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            connection: navigator.connection ? {
                effectiveType: navigator.connection.effectiveType,
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt
            } : null
        };
    }

    // Send performance data to server (if endpoint exists)
    function sendPerformanceData() {
        const report = generatePerformanceReport();
        
        // Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'performance_report', {
                event_category: 'Performance',
                event_label: 'Complete Report',
                custom_map: {
                    'performance_data': JSON.stringify(report)
                }
            });
        }

        // Send to custom endpoint (if available)
        if (window.performanceEndpoint) {
            fetch(window.performanceEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(report)
            }).catch(err => console.log('Performance data send failed:', err));
        }
    }

    // Send data before page unload
    window.addEventListener('beforeunload', () => {
        sendPerformanceData();
    });

    // Send data periodically
    setInterval(sendPerformanceData, 30000); // Every 30 seconds

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnalytics);
    } else {
        initAnalytics();
    }

    // Export for global access
    window.Analytics = {
        init: initAnalytics,
        trackEvent: trackEvent,
        getPerformanceReport: generatePerformanceReport,
        sendPerformanceData: sendPerformanceData
    };
})();
