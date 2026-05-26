import React from 'react'
import { Calendar, ExternalLink, GraduationCap, Award } from 'lucide-react'

const Experience: React.FC = () => {
    const companies = [
        {
            name: 'UNEP',
            logo: '/Unep_logo.png',
            role: 'Communications & Knowledge Management',
            website: 'https://nature4health.org'
        },
        {
            name: 'LEDO Kenya',
            logo: '/LedoKenya_logo.webp',
            role: 'Web Consultant',
            website: 'https://ledokenya.org'
        },
        {
            name: 'Karen AGC',
            logo: '/Karen_AGC_logo.png',
            role: 'Web Engineer',
            website: 'https://karenagc.org'
        },
        {
            name: 'Kericho Summit',
            logo: '/kerichoCounty_logo.jpeg',
            role: 'Web Developer',
            website: 'https://kerichoinvest.com'
        }
    ]

    return (
        <section id="experience" className="experience-section py-20 bg-[#101625] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 px-4">
                    <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                        Collaborations & Credentials
                    </h2>
                    <p className="section-text text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                        Proud to have collaborated with prestigious global agencies, regional nonprofits, and community initiatives to build impactful web products.
                    </p>
                </div>

                {/* Companies/Partners Logo Grid */}
                <div className="mb-20 px-4">
                    <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                        Organizations I've Worked With
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {companies.map((company, index) => (
                            <a
                                key={index}
                                href={company.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/40 rounded-xl p-6 flex flex-col justify-center items-center gap-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-1"
                            >
                                <div className="h-16 w-full flex items-center justify-center">
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        className="max-h-full max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                                    />
                                </div>
                                <span className="text-xs font-medium text-gray-400 group-hover:text-blue-400 transition-colors duration-200">
                                    {company.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications Subsection */}
                <div className="mt-20 pt-16 border-t border-gray-700/60 max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Education & Credentials
                        </h3>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            My academic foundations and technical training in software engineering, AI automation, and project management.
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Education Timeline */}
                        <div>
                            <h4 className="text-lg font-bold text-blue-400 uppercase tracking-widest mb-10 flex items-center gap-3">
                                <GraduationCap className="h-6 w-6" />
                                Academic Degrees
                            </h4>
                            <div className="space-y-10 relative border-l border-gray-700 ml-4">
                                {/* Masters */}
                                <div className="pl-8 relative">
                                    <span className="absolute -left-[9px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 border border-blue-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    </span>
                                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/20 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h5 className="text-xl font-bold text-white leading-snug">
                                                    Master's Degree in Management of Sustainable Development Goals
                                                </h5>
                                                <p className="text-base font-semibold text-blue-400 mt-1">
                                                    LUMSA University
                                                </p>
                                                <p className="text-xs text-gray-400 mt-0.5">
                                                    Rome, Italy
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center text-xs sm:text-sm text-purple-300 font-semibold bg-purple-900/30 px-3 py-1.5 rounded-full border border-purple-500/20 self-start">
                                                <Calendar className="h-4 w-4 mr-1 text-purple-400" />
                                                Ongoing
                                            </span>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
                                            Focusing on sustainable development policies, ESG (Environmental, Social, and Governance) framework management, international development cooperation, and strategic project management aligned with the United Nations Sustainable Development Goals.
                                        </p>
                                    </div>
                                </div>

                                {/* Bachelors */}
                                <div className="pl-8 relative">
                                    <span className="absolute -left-[9px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-gray-900 border border-blue-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    </span>
                                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/20 transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h5 className="text-xl font-bold text-white leading-snug">
                                                    Bachelor of Education (Science) in Chemistry and Biology
                                                </h5>
                                                <p className="text-base font-semibold text-blue-400 mt-1">
                                                    Tangaza University College
                                                </p>
                                                <p className="text-xs text-gray-400 mt-0.5">
                                                    Nairobi, Kenya
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center text-xs sm:text-sm text-purple-300 font-semibold bg-purple-900/30 px-3 py-1.5 rounded-full border border-purple-500/20 self-start">
                                                <Calendar className="h-4 w-4 mr-1 text-purple-400" />
                                                2020 – 2024
                                            </span>
                                        </div>
                                        <div className="text-sm sm:text-base text-gray-300 mt-4 space-y-3 leading-relaxed">
                                            <p className="font-bold text-green-400 flex items-center gap-1.5">
                                                <Award className="h-4 w-4 text-green-400" />
                                                Graduated with Honors | GPA: 4.0/A – 72 points
                                            </p>
                                            <p>
                                                Actively served as the **Student Council Secretary** (2023 – 2024), representing student body communication, managing multicultural event coordination, and spearheading online media updates for student groups.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Certificates & Alumni Credentials */}
                        <div>
                            <h4 className="text-lg font-bold text-purple-400 uppercase tracking-widest mb-10 flex items-center gap-3">
                                <Award className="h-6 w-6" />
                                Alumni Training & Certifications
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {/* PLP */}
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-500/20 mb-2">
                                                Alumni Program
                                            </span>
                                            <h5 className="font-bold text-white text-lg">
                                                Software Engineering
                                            </h5>
                                        </div>
                                        <Award className="h-6 w-6 text-purple-400 shrink-0" />
                                    </div>
                                    <p className="text-sm text-blue-400 font-semibold mb-1">
                                        Power Learn Project (PLP)
                                    </p>
                                    <p className="text-xs text-gray-400 mb-4">
                                        Class of 2024
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                        Completed comprehensive curriculum spanning backend database engineering, frontend React applications, REST API designs, and professional collaborative workflows.
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-gray-700/40">
                                        <a
                                            href="/Certificates/Isaac Lemayian PLP Certificate.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Official Certificate
                                        </a>
                                    </div>
                                </div>

                                {/* ALX */}
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-900/40 text-purple-300 border border-purple-500/20 mb-2">
                                                Alumni Program
                                            </span>
                                            <h5 className="font-bold text-white text-lg">
                                                Front-End Web Development
                                            </h5>
                                        </div>
                                        <Award className="h-6 w-6 text-purple-400 shrink-0" />
                                    </div>
                                    <p className="text-sm text-blue-400 font-semibold mb-1">
                                        ALX Africa
                                    </p>
                                    <p className="text-xs text-gray-400 mb-4">
                                        2025
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                        Specialized and validated training building highly complex user interfaces, implementing robust client-side routing, responsive styling systems, and handling state synchronization.
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-gray-700/40">
                                        <a
                                            href="/Certificates/ISAAC_LEMAYIAN_ALX_CERTIFICATE.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Official Certificate
                                        </a>
                                    </div>
                                </div>

                                {/* KodeKloud */}
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-900/40 text-green-300 border border-green-500/20 mb-2">
                                                Technical Training
                                            </span>
                                            <h5 className="font-bold text-white text-lg">
                                                AI Automation with N8N
                                            </h5>
                                        </div>
                                        <Award className="h-6 w-6 text-purple-400 shrink-0" />
                                    </div>
                                    <p className="text-sm text-blue-400 font-semibold mb-1">
                                        KodeKloud
                                    </p>
                                    <p className="text-xs text-gray-400 mb-4">
                                        2025
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                        Hands-on engineering of intelligent automation pipelines: connecting LLMs, vector search, setting up webhooks, API polling, and handling complex conditional flow branches via N8N.
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-gray-700/40">
                                        <a
                                            href="/Certificates/AI Automation with N8N_by KodeKloud_Isaac_Lemayian.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Official Certificate
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn Professional Foundations */}
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-900/40 text-green-300 border border-green-500/20 mb-2">
                                                Professional Training
                                            </span>
                                            <h5 className="font-bold text-white text-lg">
                                                Professional Foundations
                                            </h5>
                                        </div>
                                        <Award className="h-6 w-6 text-purple-400 shrink-0" />
                                    </div>
                                    <p className="text-sm text-blue-400 font-semibold mb-1">
                                        ALX Africa
                                    </p>
                                    <p className="text-xs text-gray-400 mb-4">
                                        August 2025
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                        Practical focus on professional growth in digital communication, cross-functional collaboration, agile remote work setups, and professional presentation tools.
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-gray-700/40">
                                        <a
                                            href="/Certificates/Certificate_Stand out in a competitive job market.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Official Certificate
                                        </a>
                                    </div>
                                </div>

                                {/* Project Management */}
                                <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 flex flex-col h-full sm:col-span-2">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <div>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-900/40 text-green-300 border border-green-500/20 mb-2">
                                                Professional Certification
                                            </span>
                                            <h5 className="font-bold text-white text-lg">
                                                Project Management Foundations
                                            </h5>
                                        </div>
                                        <Award className="h-6 w-6 text-purple-400 shrink-0" />
                                    </div>
                                    <p className="text-sm text-blue-400 font-semibold mb-1">
                                        LinkedIn Learning / Project Management Institute
                                    </p>
                                    <p className="text-xs text-gray-400 mb-4">
                                        2025
                                    </p>
                                    <p className="text-sm text-gray-300 leading-relaxed flex-grow">
                                        Mastery of key project lifecycle methodologies, stakeholder engagement protocols, agile task planning, risk analysis, project scoping, and team execution structures.
                                    </p>
                                    <div className="mt-6 pt-4 border-t border-gray-700/40">
                                        <a
                                            href="/Certificates/CertificateOfCompletion_Project Management Foundations (2).pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Official Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
