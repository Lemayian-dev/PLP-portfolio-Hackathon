import React from 'react'
import { Github, Linkedin, Heart, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/isaac-lemayian/',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: 'https://x.com/Zack_lem',
            color: 'hover:text-blue-400'
        },
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/lemayian',
            color: 'hover:text-gray-900'
        }
    ]

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Design', href: '#graphic-design' },
        { name: 'Videos', href: '#videos' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <footer className="footer-section bg-[#101625] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">Isaac Lemayian</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Designer and developer passionate about creating digital experiences
                            that make a difference. Let's build something amazing together.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-gray-300 ${social.color} transition-colors duration-200`}
                                        aria-label={social.name}
                                    >
                                        <Icon className="h-6 w-6" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>lemayian.dev@gmail.com</p>
                            <p>Nairobi, Kenya</p>
                            <p>Response within 24 hours</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm">
                        © {currentYear} Isaac Lemayian. Available for select freelance and collaboration.
                    </p>
                    <p className="text-gray-300 text-sm flex items-center mt-4 md:mt-0">
                        Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> in React & Tailwind. Coffee helped.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
