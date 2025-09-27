import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const AllGraphicDesigns: React.FC = () => {
    const navigate = useNavigate()

    const allDesignProjects = [
        {
            id: 1,
            title: 'Tuimarishe Tujenge Poster',
            description: 'A motivational poster design for community development initiative promoting unity and growth',
            image: '/Tuimarishe Tujenge1.jpg'
        },
        {
            id: 2,
            title: 'Social Media Campaign Design',
            description: 'Creative social media graphics for brand promotion and engagement',
            image: '/WhatsApp Image 2024-11-08 at 12.12.34 AM (1).jpeg'
        },
        {
            id: 3,
            title: 'KEIS Investment Summit Poster',
            description: 'Professional event poster for Kericho Enterprise Investment Summit with modern design elements',
            image: '/KEIS POSTER 48.jpg'
        },
        {
            id: 4,
            title: 'Modern Creative Design',
            description: 'Contemporary graphic design showcasing artistic creativity and modern aesthetics',
            image: '/design 1.jpeg'
        },
        {
            id: 5,
            title: 'Bold Artistic Poster',
            description: 'Vibrant poster design with bold artistic elements and striking visual impact',
            image: '/design 2.jpeg'
        },
        {
            id: 6,
            title: 'German Ambassador Event Poster',
            description: 'Professional diplomatic event poster featuring German Ambassador with elegant typography',
            image: '/German Ambassador - Speaker (1).jpg'
        },
       
        
    ]

    const goBack = () => {
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-[#1a1f2f] text-white">
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
                        <h1 className="text-xl font-bold">All Graphic Designs</h1>
                        <div></div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        All Graphic Designs
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        A comprehensive collection of my graphic design work, from posters and flyers to brand identity and digital marketing materials.
                    </p>
                </div>

                {/* Designs Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allDesignProjects.map((project) => (
                        <div key={project.id} className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                            <div className="h-80 md:h-96 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
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

export default AllGraphicDesigns
