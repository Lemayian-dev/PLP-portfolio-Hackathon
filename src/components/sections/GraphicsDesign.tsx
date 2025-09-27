import React, { useState } from 'react'
import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const GraphicsDesign: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null)
    const navigate = useNavigate()

    const viewAllDesigns = () => {
        navigate('/graphic-designs')
    }

    const designProjects = [
        {
            id: 1,
            title: 'Tuimarishe Tujenge Poster',
            image: '/Tuimarishe Tujenge1.jpg',
            description: 'A motivational poster design for community development initiative promoting unity and growth'
        },
        {
            id: 2,
            title: 'Social Media Campaign Design',
            image: '/WhatsApp Image 2024-11-08 at 12.12.34 AM (1).jpeg',
            description: 'Creative social media graphics for brand promotion and engagement'
        },
        {
            id: 3,
            title: 'KEIS Investment Summit Poster',
            image: '/KEIS POSTER 48.jpg',
            description: 'Professional event poster for Kericho Enterprise Investment Summit with modern design elements'
        },
        {
            id: 4,
            title: 'Modern Creative Design',
            image: '/design 1.jpeg',
            description: 'Contemporary graphic design showcasing artistic creativity and modern aesthetics'
        },
        {
            id: 5,
            title: 'Bold Artistic Poster',
            image: '/design 2.jpeg',
            description: 'Vibrant poster design with bold artistic elements and striking visual impact'
        },
        {
            id: 6,
            title: 'German Ambassador Event Poster',
            image: '/German Ambassador - Speaker (1).jpg',
            description: 'Professional diplomatic event poster featuring German Ambassador with elegant typography'
        }
    ]

    const openImageModal = (image: string, title: string) => {
        setSelectedImage({ src: image, title })
    }

    const closeImageModal = () => {
        setSelectedImage(null)
    }

    return (
        <section id="graphic-design" className="graphics-section py-20 bg-[#1a1f2f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6">
                        Graphic Design
                    </h2>
                    <p className="section-text text-xl text-gray-200 max-w-3xl mx-auto">
                        Featured designs and manipulations that I have created for clients.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                    {designProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer border border-gray-700"
                            onClick={() => openImageModal(project.image, project.title)}
                        >
                            <div className="h-80 md:h-96 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-300">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-8 md:mt-12 px-4">
                    <button
                        onClick={viewAllDesigns}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto"
                    >
                        View All Graphic Designs
                    </button>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
                    <div className="bg-gray-800 rounded-lg max-w-5xl max-h-[95vh] overflow-hidden w-full">
                        <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-700">
                            <h3 className="text-base sm:text-lg font-semibold text-white">
                                {selectedImage.title}
                            </h3>
                            <button
                                onClick={closeImageModal}
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                            </button>
                        </div>
                        <div className="p-2 sm:p-4">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default GraphicsDesign
