import React from 'react'
import { Code, Palette, Database, Globe } from 'lucide-react'

const About: React.FC = () => {
    const skills = [
        {
            category: 'Programming',
            icon: Code,
            technologies: ['JavaScript', 'Python', 'PHP', 'SQL', 'HTML5', 'CSS3']
        },
        {
            category: 'Design Tools',
            icon: Palette,
            technologies: ['Figma', 'Photoshop', 'InDesign', 'Adobe Creative Suite', 'Webflow']
        },
        {
            category: 'Development',
            icon: Database,
            technologies: ['WordPress', 'Elementor', 'WooCommerce', 'FluentCRM', 'Netlify']
        },
        {
            category: 'Tools & Platforms',
            icon: Globe,
            technologies: ['Git', 'Wistia', 'Stripe', 'M-pesa', 'Celcom', 'Hostinger']
        }
    ]

    return (
        <section id="about" className="about-section py-20 bg-[#1a1f2f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16 px-4">
                    <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                        About Me
                    </h2>
                    <p className="section-text text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                        Hey there! I'm a <strong>designer</strong> and <strong>developer</strong> who's been building cool stuff for over 4 years!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-20 section-content px-4">
                    {/* About Text */}
                    <div className="order-2 lg:order-1">
                        <h3 className="section-title text-xl sm:text-2xl font-bold text-white mb-4 md:mb-6">My Story</h3>
                        <div className="section-text space-y-3 md:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                            <p>
                                I got into tech because I was curious about how websites work, and now I'm obsessed with creating digital
                                experiences that people actually love using. To be honest, I don't have a CS degree but I have a lot of experience and knowledge in the field.
                            </p>
                            <p>
                                In design, I'm pretty good with <strong>Figma</strong>, <strong>Photoshop</strong>, and the <strong>Adobe Creative Suite</strong> for design.
                                I love taking complex problems and turning them into simple, beautiful solutions that actually work!
                            </p>
                            <p>
                                When I'm not coding or designing, you'll find me exploring new tech, working on side projects, or helping other
                                developers level up their skills. I'm always learning something new because this industry moves fast and I want to stay ahead of the curve!
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 order-1 lg:order-2">
                        <div className="text-center p-4 md:p-6 bg-blue-900/20 rounded-lg border border-blue-500/20">
                            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">110+</div>
                            <div className="text-xs md:text-sm text-gray-300">Projects</div>
                        </div>
                        <div className="text-center p-4 md:p-6 bg-purple-900/20 rounded-lg border border-purple-500/20">
                            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1 md:mb-2">4+</div>
                            <div className="text-xs md:text-sm text-gray-300">Years</div>
                        </div>
                        <div className="text-center p-4 md:p-6 bg-green-900/20 rounded-lg border border-green-500/20">
                            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">25+</div>
                            <div className="text-xs md:text-sm text-gray-300">Clients</div>
                        </div>
                        <div className="text-center p-4 md:p-6 bg-orange-900/20 rounded-lg border border-orange-500/20">
                            <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1 md:mb-2">100%</div>
                            <div className="text-xs md:text-sm text-gray-300">Satisfaction</div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="px-4">
                    <h3 className="section-title text-2xl sm:text-3xl font-bold text-white text-center mb-8 md:mb-12">Skills & Technologies</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon
                            return (
                                <div key={index} className="bg-gray-800/50 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-700">
                                    <div className="flex items-center mb-3 md:mb-4">
                                        <Icon className="h-6 w-6 md:h-8 md:w-8 text-blue-400 mr-2 md:mr-3" />
                                        <h4 className="text-lg md:text-xl font-semibold text-white">{skill.category}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-1 md:gap-2">
                                        {skill.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 md:px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs md:text-sm font-medium border border-gray-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
