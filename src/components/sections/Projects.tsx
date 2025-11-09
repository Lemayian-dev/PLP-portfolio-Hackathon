import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const viewAllProjects = () => {
    navigate("/projects");
  };

  const viewAllWebDesigns = () => {
    navigate("/web-designs");
  };

  const projects = [
    {
      id: 1,
      title: "Kericho Enterprise Summit",
      description:
        "A comprehensive government website for the Kericho Enterprise Summit featuring event management, delegate registration, and real-time updates. Successfully handled 500+ registrations.",
      image: "/KerichoInvest.jpg",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Elementor"],
      liveUrl: "https://kerichoinvest.com/",
      githubUrl: "#",
      featured: true,
      tags: ["Government", "Event Management", "Registration System"],
    },
    {
      id: 2,
      title: "Festus Kir Portfolio",
      description:
        "Portfolio website for Festus Kir, a film maker, storyteller, crazy video editor, and the best colorist in town.",
      image: "/Home-Festus-Kir.png",
      technologies: ["Wistia", "JavaScript", "Elementor", "Hostinger"],
      liveUrl: "https://festuskir.com/",
      githubUrl: "#",
      featured: true,
      tags: ["Film Maker", "Storyteller", "Video Editor", "Colorist"],
    },
    {
      id: 3,
      title: "Hadel Pixels Inc",
      description:
        "A comprehensive digital agency website showcasing mobile app development and web design services with integrated CRM functionality and automated marketing workflows.",
      image: "/Home-Hadelpixels-Agency.png",
      technologies: ["FluentCRM", "JavaScript", "WordPress"],
      liveUrl: "https://hadelpixels.com/",
      githubUrl: "#",
      featured: false,
      tags: ["Digital Agency", "Design & Development", "Marketing Automation"],
    },
    {
      id: 4,
      title: "SokoFresh E-commerce",
      description:
        "E-commerce platform with sleek UI/UX design. Customers can place orders, track deliveries, and make payments.",
      image: "/sokoFresh-–-Fresh-and-healthy-food-for-you (1).png",
      technologies: [
        "PHP",
        "SQL",
        "FluentCRM",
        "WooCommerce",
        "Stripe",
        "M-pesa",
      ],
      liveUrl: "https://commerce.hadelmotors.com/",
      githubUrl: "#",
      featured: false,
      tags: ["E-commerce", "Online Shopping"],
    },
    {
      id: 5,
      title: "Project Request System",
      description:
        "A project management system for church media team to request and assign projects like posters, banners, and videos. Features team collaboration and project tracking.",
      image: "/mediaprojectrequest.png",
      technologies: ["PHP", "SQL", "Bootstrap", "JS", "Celcom", "M-pesa"],
      liveUrl: "https://mediaprojects.karenagc.org/",
      githubUrl: "#",
      featured: false,
      tags: ["Management System", "Team Collaboration"],
    },
    {
      id: 6,
      title: "LedoKenya Website",
      description:
        "A modern, responsive website for LedoKenya featuring clean design, fast loading times, and seamless user experience. Built with modern web technologies and optimized for performance.",
      image: "/LedoKenyaweb.webp",
      technologies: [
        "JavaScript",
        "FluentCRM",
        "WordPress",
        "CSS3",
        "HTML5",
        "Elementor",
      ],
      liveUrl: "https://ledokenya.org/",
      githubUrl: "#",
      featured: true,
      tags: ["Modern Website", "Responsive Design", "Performance Optimized"],
    },
    {
      id: 7,
      title: "Karen Africa Gospel Church",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      description:
        "This is a website for Karen AGC church which is a community of believers. Features include event management, sermon archives, and community updates.",
      image: "/karenagc.PNG",
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "FluentCRM"],
      liveUrl: "https://karenagc.org/",
      githubUrl: "#",
      featured: false,
      tags: ["Church Website", "Community"],
    },
    {
      id: 8,
      title: "Resumind AI",
      description: "AI powered Resume builder. Create professional resumes using Resumind.",
      image: "/Resumind-AI.png",
      technologies: ["TailwindCSS", "React", "Clerk", "Vercel"],
      liveUrl: "https://resumind-gold.vercel.app/",
      githubUrl: "#",
      featured: true,
      tags: ["AI", "Saas"],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects-section py-20 bg-[#101625]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Featured Projects
          </h2>
          <p className="section-text text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in full-stack development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 px-4">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="h-48 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 md:px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs md:text-sm font-medium border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 md:px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs md:text-sm font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Button
                    asChild
                    className="w-full sm:w-auto text-sm md:text-base"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="px-4">
          <h3 className="section-title text-2xl sm:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            Other Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-700"
              >
                <div className="h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-200 rounded text-xs font-medium border border-gray-600">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <Button size="sm" asChild className="w-full">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-3 w-3" />
                        View Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Buttons */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              onClick={viewAllWebDesigns}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full sm:w-auto"
            >
              View All Web Designs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={viewAllProjects}
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white w-full sm:w-auto"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
