import type { Skill, ContactInfo, SocialLink } from '@/types'
import { Code, Palette, Database, Cloud, Smartphone, Globe, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]

export const skills: Skill[] = [
    {
        category: 'Frontend',
        icon: Code,
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'SASS']
    },
    {
        category: 'Backend',
        icon: Database,
        technologies: ['Node.js', 'Python', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
        category: 'Design',
        icon: Palette,
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Framer']
    },
    {
        category: 'Cloud & DevOps',
        icon: Cloud,
        technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Vercel']
    },
    {
        category: 'Mobile',
        icon: Smartphone,
        technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase']
    },
    {
        category: 'Tools',
        icon: Globe,
        technologies: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Storybook']
    }
]

export const contactInfo: ContactInfo[] = [
    {
        icon: Mail,
        title: 'Email',
        value: 'your.email@example.com',
        href: 'mailto:your.email@example.com'
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+1 (555) 123-4567',
        href: 'tel:+15551234567'
    },
    {
        icon: MapPin,
        title: 'Location',
        value: 'San Francisco, CA',
        href: '#'
    }
]

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        icon: Github,
        href: 'https://github.com',
        color: 'hover:text-gray-900'
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        href: 'https://linkedin.com',
        color: 'hover:text-blue-600'
    },
    {
        name: 'Twitter',
        icon: Twitter,
        href: 'https://twitter.com',
        color: 'hover:text-blue-400'
    }
]
