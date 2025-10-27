import React from 'react'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const AllWebDesigns: React.FC = () => {
    const navigate = useNavigate()

    const allWebProjects = [
        {
            id: 1,
            title: 'Kericho Enterprise Summit',
            description: 'A comprehensive government website for the Kericho Enterprise Summit featuring event management, delegate registration, and real-time updates. Successfully handled 500+ registrations.',
            image: '/KerichoInvest.jpg',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Elementor'],
            liveUrl: 'https://kerichoinvest.com/',
            tags: ['Government', 'Event Management', 'Registration System']
        },
        {
            id: 2,
            title: 'Festus Kir Portfolio',
            description: 'Portfolio website for Festus Kir, a film maker, storyteller, crazy video editor, and the best colorist in town.',
            image: '/Home-Festus-Kir.png',
            technologies: ['Wistia', 'JavaScript', 'Elementor', 'Hostinger'],
            liveUrl: 'https://festuskir.com/',
            tags: ['Film Maker', 'Storyteller', 'Video Editor', 'Colorist']
        },
        {
            id: 3,
            title: 'Hadel Pixels Inc',
            description: 'A comprehensive digital agency website showcasing mobile app development and web design services with integrated CRM functionality and automated marketing workflows.',
            image: '/Home-Hadelpixels-Agency.png',
            technologies: ['FluentCRM', 'JavaScript', 'WordPress'],
            liveUrl: 'https://hadelpixels.com/',
            tags: ['Digital Agency', 'Design & Development', 'Marketing Automation']
        },
        {
            id: 4,
            title: 'SokoFresh E-commerce',
            description: 'E-commerce platform with sleek UI/UX design. Customers can place orders, track deliveries, and make payments.',
            image: '/sokoFresh-–-Fresh-and-healthy-food-for-you (1).png',
            technologies: ['React', 'SQL', 'FluentCRM', 'WooCommerce', 'Stripe', 'M-pesa'],
            liveUrl: 'https://commerce.hadelmotors.com/',
            tags: ['E-commerce', 'Online Shopping']
        },
        {
            id: 5,
            title: 'Project Request System',
            description: 'A project management system for church media team to request and assign projects like posters, banners, and videos. Features team collaboration and project tracking.',
            image: '/mediaprojectrequest.png',
            technologies: ['PHP', 'SQL', 'Bootstrap', 'JS', 'Celcom', 'M-pesa'],
            liveUrl: 'https://mediaprojects.karenagc.org/',
            tags: ['Management System', 'Team Collaboration']
        },
        {
            id: 6,
            title: 'LedoKenya Website',
            description: 'A modern, responsive website for LedoKenya featuring clean design, fast loading times, and seamless user experience. Built with modern web technologies and optimized for performance.',
            image: '/LedoKenya_logo.webp',
            technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Netlify'],
            liveUrl: 'https://ledokenya.com/',
            tags: ['Modern Website', 'Responsive Design', 'Performance Optimized']
        },
        {
            id: 7,
            title: 'Karen Africa Gospel Church',
            description: 'This is a website for Karen AGC church which is a community of believers. Features include event management, sermon archives, and community updates.',
            image: '/karenagc.PNG',
            technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'FluentCRM'],
            liveUrl: 'https://karenagc.org/',
            tags: ['Church Website', 'Community']
        },

    ]

    const goBack = () => {
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-[#101625] text-white">
            {/* Header */}
            <div className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Button
                            variant="ghost"
                            onClick={goBack}
                            className="text-gray-300 hover:text-white"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Portfolio
                        </Button>
                        <h1 className="text-xl font-bold">All Web Designs</h1>
                        <div></div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        All Web Designs
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        A comprehensive showcase of all my web development projects, from simple websites to complex web applications and e-commerce platforms.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allWebProjects.map((project) => (
                        <div key={project.id} className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                            <div className="h-48 md:h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium border border-blue-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Button asChild className="w-full">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            View Live Demo
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back to Top */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        onClick={goBack}
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AllWebDesigns
