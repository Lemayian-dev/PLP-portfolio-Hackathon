# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: Built with shadcn/ui components
- **Smooth Animations**: Smooth scrolling and hover effects
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Fast loading and optimized bundle size

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── profile-placeholder.svg    # Profile image
│   │   ├── project-ecommerce.svg      # E-commerce project image
│   │   ├── project-taskmanager.svg    # Task manager project image
│   │   ├── project-weather.svg        # Weather dashboard project image
│   │   ├── project-analytics.svg      # Analytics project image
│   │   ├── project-banking.svg        # Banking app project image
│   │   ├── project-ai.svg             # AI project image
│   │   └── hero-bg.svg                # Hero background pattern
│   └── icons/                         # Icon assets (future use)
├── components/
│   ├── layout/
│   │   ├── Header.tsx                 # Navigation header with mobile menu
│   │   └── Footer.tsx                 # Footer with social links and contact info
│   ├── sections/
│   │   ├── Hero.tsx                   # Landing section with introduction
│   │   ├── About.tsx                  # About section with skills and experience
│   │   ├── Projects.tsx               # Projects showcase with featured and other projects
│   │   └── Contact.tsx                # Contact form and information
│   └── ui/
│       ├── button.tsx                 # Reusable button component
│       ├── accordion.tsx              # Accordion component
│       ├── alert-dialog.tsx           # Alert dialog component
│       └── smooth-scroll.tsx          # Smooth scrolling utility
├── constants/
│   └── index.ts                       # Application constants and data
├── lib/
│   └── utils.ts                       # Utility functions
├── types/
│   └── index.ts                       # TypeScript type definitions
├── App.tsx                            # Main application component
└── main.tsx                           # Application entry point
```

## 🛠️ Technologies Used

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 🎨 Design Features

### Hero Section
- Gradient background with subtle pattern
- Professional introduction with call-to-action buttons
- Smooth scroll to next section

### About Section
- Personal story and experience
- Skills organized by category
- Statistics and achievements
- Responsive grid layout

### Projects Section
- Featured projects with detailed descriptions
- Technology tags for each project
- Live demo and GitHub links
- Responsive project cards

### Contact Section
- Contact form with validation
- Contact information
- Social media links
- Professional layout

### Navigation
- Fixed header with backdrop blur
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Customization

### Personal Information
Update the following files with your personal information:

- `src/components/sections/Hero.tsx` - Name, title, and description
- `src/components/sections/About.tsx` - Personal story and skills
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/layout/Header.tsx` - Social media links
- `src/components/layout/Footer.tsx` - Footer information

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component styles are in individual component files
- Global styles are in `src/index.css`

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)