// Scroll Progress Bar
export const initScrollProgress = () => {
    const scrollProgress = document.getElementById('scroll-progress')

    if (!scrollProgress) return

    const updateScrollProgress = () => {
        const scrollTop = window.pageYOffset
        const docHeight = document.body.scrollHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100

        scrollProgress.style.width = scrollPercent + '%'
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress() // Initial call
}

// Animate on scroll
export const initScrollAnimations = () => {
    const observerOptions: IntersectionObserverInit = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated')
            }
        })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach(el => {
        observer.observe(el)
    })

    // Observe skill items
    const skillItems = document.querySelectorAll('.skill-item')
    skillItems.forEach((el, index) => {
        observer.observe(el)
        // Add delay for staggered animation
        const htmlEl = el as HTMLElement
        htmlEl.style.transitionDelay = `${index * 0.1}s`
    })

    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach((el, index) => {
        observer.observe(el)
        const htmlEl = el as HTMLElement
        htmlEl.style.transitionDelay = `${index * 0.1}s`
    })
}
