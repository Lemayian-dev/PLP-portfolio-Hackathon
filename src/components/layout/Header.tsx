import React, { useState } from 'react'
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/theme-toggle'

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigation = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Design', href: '#graphic-design' },
        { name: 'Videos', href: '#videos' },
        { name: 'Contact', href: '#contact' },
    ]

    const socialLinks = [
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/isaac-lemayian/', icon: Linkedin },
        { name: 'Twitter', href: 'https://x.com/Zack_lem', icon: Twitter },
        { name: 'GitHub', href: 'https://github.com/lemayian', icon: Github },
    ]

    return (
        <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
            {/* Scroll Progress Bar */}
            <div className="scroll-progress" id="scroll-progress"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 md:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="header-logo text-lg sm:text-xl md:text-2xl font-bold text-white">
                            <a href="#home" className="flex items-center gap-1 md:gap-2">
                                <i className="fas fa-code text-blue-400 text-sm md:text-base"></i>
                                <span className="hidden sm:inline">Isaac Lemayian</span>
                                <span className="sm:hidden">Isaac</span>
                            </a>
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="nav-link text-gray-300 hover:text-blue-400 px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((link) => {
                            const Icon = link.icon
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="social-link text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                    aria-label={link.name}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            )
                        })}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="mobile-nav px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="nav-link text-gray-300 hover:text-blue-400 block px-3 py-2 text-base font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center justify-between px-3 py-2 border-t border-gray-700 mt-2">
                                <div className="flex space-x-4">
                                    {socialLinks.map((link) => {
                                        const Icon = link.icon
                                        return (
                                            <a
                                                key={link.name}
                                                href={link.href}
                                                className="social-link text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                                aria-label={link.name}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </a>
                                        )
                                    })}
                                </div>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
