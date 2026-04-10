import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingSpinner from './components/LoadingSpinner'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingSpinner />}
      </AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
