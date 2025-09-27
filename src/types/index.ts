export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    featured: boolean
}

export interface Skill {
    category: string
    icon: React.ComponentType<{ className?: string }>
    technologies: string[]
}

export interface ContactInfo {
    icon: React.ComponentType<{ className?: string }>
    title: string
    value: string
    href: string
}

export interface SocialLink {
    name: string
    icon: React.ComponentType<{ className?: string }>
    href: string
    color: string
}
