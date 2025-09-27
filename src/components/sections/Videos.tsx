import React from 'react'

const Videos: React.FC = () => {
    const videoProjects = [
        {
            id: 1,
            title: 'Mother Nature Hitting Back',
            type: 'wistia',
            embedId: '9jndhce92w',
            description: 'Environmental awareness video'
        },
        {
            id: 2,
            title: 'YouTube Video 1',
            type: 'youtube',
            embedId: 'eGBIx0KC5xU',
            description: 'Creative video project'
        },
        {
            id: 3,
            title: 'YouTube Video 2',
            type: 'youtube',
            embedId: 'aL6PAXQgZFo',
            description: 'Another creative project'
        },
        {
            id: 4,
            title: 'YouTube Video 3',
            type: 'youtube',
            embedId: 'hftr4_LRiFk',
            description: 'Video editing showcase'
        },
        {
            id: 5,
            title: 'YouTube Video 4',
            type: 'youtube',
            embedId: 'IyWVn6wvH3s',
            description: 'Final video project'
        }
    ]

    return (
        <section id="videos" className="videos-section py-20 bg-[#101625]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title text-4xl md:text-5xl font-bold text-white mb-6">
                        Video Projects
                    </h2>
                    <p className="section-text text-xl text-gray-200 max-w-3xl mx-auto">
                        I sometimes play with Premiere Pro and After Effects, and this is what I created! 🎬
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoProjects.map((video) => (
                        <div
                            key={video.id}
                            className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
                        >
                            <div className="aspect-video">
                                {video.type === 'wistia' ? (
                                    <iframe
                                        src={`https://fast.wistia.net/embed/iframe/${video.embedId}?seo=false&videoFoam=true`}
                                        allow="autoplay; fullscreen"
                                        allowTransparency={true}
                                        title={video.title}
                                        className="w-full h-full border-0 rounded-t-lg"
                                    />
                                ) : (
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.embedId}?rel=0&modestbranding=1`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="w-full h-full border-0 rounded-t-lg"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {video.title}
                                </h3>
                                <p className="text-gray-300">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Videos
