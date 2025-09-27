import React, { useEffect } from 'react'

interface SmoothScrollProps {
    children: React.ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
    useEffect(() => {
        // Add smooth scrolling behavior to all anchor links
        const handleClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement
            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault()
                const targetId = target.getAttribute('href')?.substring(1)
                const targetElement = document.getElementById(targetId || '')

                if (targetElement) {
                    const headerHeight = 80 // Adjust based on your header height
                    const targetPosition = targetElement.offsetTop - headerHeight

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    })
                }
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return <>{children}</>
}

export default SmoothScroll
