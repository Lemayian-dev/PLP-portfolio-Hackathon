
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Automations from './components/sections/Automations'
// import Videos from './components/sections/Videos'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import SmoothScroll from './components/ui/smooth-scroll'
import AllProjects from './pages/AllProjects'
import AllWebDesigns from './pages/AllWebDesigns'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <SmoothScroll>
            <div className="min-h-screen bg-background text-foreground">
              <Header />
              <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Automations />
                {/* <Videos /> */}
                <Contact />
              </main>
              <Footer />
            </div>
          </SmoothScroll>
        } />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/web-designs" element={<AllWebDesigns />} />
      </Routes>
    </Router>
  )
}

export default App
