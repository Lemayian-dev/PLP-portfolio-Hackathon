import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(true) // Default to dark mode

    useEffect(() => {
        // Check if there's a saved theme preference
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            setIsDark(savedTheme === 'dark')
            document.body.classList.toggle('light-theme', savedTheme === 'light')
        } else {
            // Default to dark mode
            setIsDark(true)
            document.body.classList.remove('light-theme')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)

        if (newTheme) {
            // Dark mode
            document.body.classList.remove('light-theme')
            localStorage.setItem('theme', 'dark')
        } else {
            // Light mode
            document.body.classList.add('light-theme')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle-btn p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <Sun className="sun-icon h-5 w-5 text-yellow-400" />
            ) : (
                <Moon className="moon-icon h-5 w-5 text-blue-400" />
            )}
        </button>
    )
}

export default ThemeToggle
