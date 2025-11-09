
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import GraphicsDesign from './components/sections/GraphicsDesign'
// import Videos from './components/sections/Videos'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import SmoothScroll from './components/ui/smooth-scroll'
import AllProjects from './pages/AllProjects'
import AllGraphicDesigns from './pages/AllGraphicDesigns'
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
                <Projects />
                <GraphicsDesign />
                {/* <Videos /> */}
                <Contact />
              </main>
              <Footer />
            </div>
          </SmoothScroll>
        } />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/graphic-designs" element={<AllGraphicDesigns />} />
        <Route path="/web-designs" element={<AllWebDesigns />} />
      </Routes>
    </Router>
  )
}

export default App
