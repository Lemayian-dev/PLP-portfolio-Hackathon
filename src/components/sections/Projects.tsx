import React, { useState } from "react";
import { ExternalLink, Layers, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 0,
      title: "Lewenei Tours & Safaris",
      description:
        "A premium travel and booking platform for Lewenei Tours & Safaris. Features custom interactive itinerary planners, direct booking integration, responsive destination guides, and stunning visual storytelling for East African wildlife experiences.",
      image: "/Lewenei-Tours-and-Safaris.png",
      technologies: ["WordPress", "WP Travel Engine", "Elementor Pro", "Custom CSS"],
      liveUrl: "https://leweneitoursandsafaris.com/",
      githubUrl: "#",
      category: "Websites & Portfolios",
      tags: ["Travel & Tourism", "Booking Engine", "Itinerary Builder"],
    },
    {
      id: 1,
      title: "Kericho Enterprise Summit",
      description:
        "A comprehensive government website for the Kericho Enterprise Summit featuring event management, delegate registration, and real-time updates. Successfully handled 500+ registrations.",
      image: "/KerichoInvest.jpg",
      technologies: ["Next.js", "Tailwind CSS", "AWS S3", "SendGrid", "Node.js"],
      liveUrl: "https://kerichoinvest.com/",
      githubUrl: "#",
      category: "Websites & Portfolios",
      tags: ["Government", "Event Management", "Registration System"],
    },
    {
      id: 2,
      title: "Festus Kir Portfolio",
      description:
        "Portfolio website for Festus Kir, a film maker, storyteller, crazy video editor, and the best colorist in town.",
      image: "/FestusKir-Director-Kir-Isaac-Lemayian.webp",
      technologies: ["Wistia", "JavaScript", "Elementor", "Hostinger"],
      liveUrl: "https://festuskir.com/",
      githubUrl: "#",
      category: "Websites & Portfolios",
      tags: ["Film Maker", "Storyteller", "Video Editor", "Colorist"],
    },
    {
      id: 3,
      title: "Hadel Pixels Inc",
      description:
        "A comprehensive digital agency website showcasing mobile app development and web design services with integrated CRM functionality and automated marketing workflows.",
      image: "/HadelPixels-Isaac-Lemayian.webp",
      technologies: ["FluentCRM", "JavaScript", "WordPress"],
      liveUrl: "https://hadelpixels.com/",
      githubUrl: "#",
      category: "Websites & Portfolios",
      tags: ["Digital Agency", "Design & Development", "Marketing Automation"],
    },
    {
      id: 4,
      title: "Project Request System",
      description:
        "A project management system for church media team to request and assign projects like posters, banners, and videos. Features team collaboration and project tracking.",
      image: "/mediaprojects-Isaaclemayian.webp",
      technologies: ["PHP", "SQL", "Bootstrap", "JS", "Celcom", "M-pesa"],
      liveUrl: "https://mediaprojects.karenagc.org/",
      githubUrl: "#",
      category: "Full-Stack & Systems",
      tags: ["Management System", "Team Collaboration"],
    },
    {
      id: 5,
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
      category: "Websites & Portfolios",
      tags: ["Modern Website", "Responsive Design", "Performance Optimized"],
    },
    {
      id: 6,
      title: "Karen Africa Gospel Church",
      description:
        "This is a website for Karen AGC church which is a community of believers. Features include event management, sermon archives, and community updates.",
      image: "/Karenagc1.webp",
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "FluentCRM"],
      liveUrl: "https://karenagc.org/",
      githubUrl: "#",
      category: "Websites & Portfolios",
      tags: ["Church Website", "Community"],
    },
    {
      id: 7,
      title: "Resumind AI",
      description:
        "AI powered Resume builder. Create professional resumes using Resumind.",
      image: "/Resumind-AI.png",
      technologies: ["TailwindCSS", "React", "Clerk", "Vercel"],
      liveUrl: "https://resumind-gold.vercel.app/",
      githubUrl: "#",
      category: "Full-Stack & Systems",
      tags: ["AI", "SaaS"],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section py-20 bg-[#101625]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Websites & Applications
          </h2>
          <p className="section-text text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            A comprehensive showcase of digital systems and websites I have designed, engineered, and shipped.
          </p>
        </div>

        {/* Dynamic Category Filter Tabs */}
        <div className="flex justify-center mb-12 px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-gray-800/40 backdrop-blur-md border border-gray-700/60 rounded-xl">
            <button
              onClick={() => setActiveFilter("All")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === "All"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/10"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/45"
              }`}
            >
              <Layers className="h-4 w-4" />
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("Full-Stack & Systems")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === "Full-Stack & Systems"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/10"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/45"
              }`}
            >
              <Database className="h-4.5 w-4.5" />
              Full-Stack & Systems ({projects.filter(p => p.category === "Full-Stack & Systems").length})
            </button>
            <button
              onClick={() => setActiveFilter("Websites & Portfolios")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === "Websites & Portfolios"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-purple-500/10"
                  : "text-gray-400 hover:text-white hover:bg-gray-700/45"
              }`}
            >
              <Globe className="h-4.5 w-4.5" />
              Websites & Portfolios ({projects.filter(p => p.category === "Websites & Portfolios").length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden hover:border-purple-500/40 border border-gray-700/60 shadow-lg hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card Image Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-48 sm:h-56 relative overflow-hidden group block cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-45 group-hover:opacity-30 transition-opacity duration-300"></div>
                {/* Subtle premium visual hover indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 bg-gray-900/85 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-semibold border border-white/10 shadow-lg">
                    Visit Website <ExternalLink className="h-4 w-4 text-blue-400" />
                  </span>
                </div>
              </a>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Clickable Title Link */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-200">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-2 cursor-pointer"
                  >
                    {project.title}
                    <ExternalLink className="h-4 w-4 text-gray-500 hover:text-blue-400 inline-block shrink-0" />
                  </a>
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-blue-900/20 text-blue-300 rounded text-xs font-semibold border border-blue-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="mt-auto">
                  <Button
                    asChild
                    className="w-full bg-[#1e293b] hover:bg-[#334155] text-gray-100 hover:text-white border border-[#475569] hover:border-blue-400/50 py-5 font-semibold transition-all duration-300 cursor-pointer shadow-md rounded-lg"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Website
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
