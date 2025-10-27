import React from "react";
import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
// import profileImage from '@/assets/images/profile-placeholder.svg'

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center justify-center bg-[#101625] relative overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-6 md:mb-8 mt-16 sm:mt-20 md:mt-24 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-2xl">
            <img
              src="/Portrait1.jpg"
              alt="Isaac Lemayian - Full Stack Developer & Designer professional headshot"
              className="w-full h-full object-cover hero-image"
              loading="eager"
              width="224"
              height="224"
            />
          </div>

          {/* Main Heading */}
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 hero-title">
            <span className="block text-lg sm:text-xl md:text-2xl mb-2 text-gray-300">
              Hi there 👋🏼
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              I'm Isaac Lemayian
            </span>
          </h1>

          {/* Subtitle */}
          <p className="section-text text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed hero-description">
            I <span className="text-blue-400 font-semibold">design</span> and <span className="text-purple-400 font-semibold">build</span>{" "} digital systems that work. Powered by AI, CMS, and creativity.

          </p>

          {/* Description */}
          {/* <p className="section-text text-base sm:text-lg text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            I build websites and apps that actually look good and work great.
            With 4+ years of turning coffee into code and 110+ projects under my
            belt, I'm all about making digital experiences that people actually
            enjoy using.
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center hero-buttons px-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base w-fit sm:w-auto"
              onClick={() =>
                window.open("/Isaac Lemayian CV (2).pdf", "_blank")
              }
            >
              <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base w-fit sm:w-auto"
              onClick={scrollToNext}
            >
              View My Work
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 hero-stats px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                110+
              </div>
              <div className="text-sm sm:text-base text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                25+
              </div>
              <div className="text-sm sm:text-base text-gray-300">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">
                4+
              </div>
              <div className="text-sm sm:text-base text-gray-300">Years</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom sm:bottom left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNext}
              className="group p-2 sm:p-3 rounded-full bg-blue-600/80 backdrop-blur-sm text-white shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 animate-bounce mt-4"
              aria-label="Scroll down to about section"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
