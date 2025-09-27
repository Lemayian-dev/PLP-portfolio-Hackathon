import React, { useState } from 'react'
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('https://formspree.io/f/mqaqyljj', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: new FormData(e.target as HTMLFormElement)
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'lemayian.dev@gmail.com',
            href: 'mailto:lemayian.dev@gmail.com'
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Nairobi, Kenya',
            href: '#'
        },
        {
            icon: Phone,
            title: 'Response Time',
            value: 'Within 24 hours',
            href: '#'
        }
    ]

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

    return (
        <section id="contact" className="contact-section py-20 bg-[#1a1f2f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6">
                        Get In Touch
                    </h2>
                    <p className="section-text text-xl text-gray-200 max-w-3xl mx-auto">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                        Let's discuss how we can work together to bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h3 className="section-title text-2xl font-bold text-white mb-8">Let's Connect</h3>
                        <p className="section-text text-gray-300 mb-8 leading-relaxed">
                            I'm always interested in new opportunities and exciting projects.
                            Whether you have a question, want to collaborate, or just want to say hi,
                            feel free to reach out!
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon
                                return (
                                    <a
                                        key={index}
                                        href={info.href}
                                        className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                                    >
                                        <Icon className="h-6 w-6 mr-4 text-blue-400" />
                                        <div>
                                            <div className="font-medium text-white">{info.title}</div>
                                            <div className="text-gray-300">{info.value}</div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-gray-500 ${social.color} transition-colors duration-200`}
                                            aria-label={social.name}
                                        >
                                            <Icon className="h-6 w-6" />
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/20 text-green-300 rounded-lg">
                                Your message was sent successfully! I'll get back to you within 24 hours.
                            </div>
                        )}
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/20 text-red-300 rounded-lg">
                                Oops! There was a problem submitting your form. Please try again.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 resize-none"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                disabled={isSubmitting}
                            >
                                <Send className="mr-2 h-5 w-5" />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
