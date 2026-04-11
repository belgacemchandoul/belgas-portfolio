import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', target: 'projects' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleBrandClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  const scrollTo = (target: string) => {
    setMobileOpen(false)
    if (pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scroller.scrollTo(target, { smooth: true, duration: 500 })
      }, 100)
    } else {
      scroller.scrollTo(target, { smooth: true, duration: 500 })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-hero-bg/80 backdrop-blur-md border-b border-zinc-800/50'
            : 'bg-transparent border-b-0 border-transparent shadow-none'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <button
            onClick={handleBrandClick}
            data-cursor="link"
            className="font-mono text-xs text-white tracking-widest hover:text-lime transition-colors duration-300"
          >
            belgacem.dev
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, target }) => (
              <button
                key={target}
                onClick={() => scrollTo(target)}
                data-cursor="link"
                className="font-sans text-sm text-muted hover:text-white transition-colors duration-300"
              >
                {label}
              </button>
            ))}
            <span className="flex items-center gap-2 font-mono text-xs text-lime border border-lime/30 rounded-full px-3 py-1.5 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" aria-hidden="true" />
              available for hire
            </span>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white flex items-center justify-center min-h-[44px] min-w-[44px]"
            onClick={() => setMobileOpen(true)}
            data-cursor="link"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 h-screen h-dvh bg-hero-bg z-50 flex flex-col items-center justify-center gap-10"
          >
            <button
              className="absolute top-5 right-6 text-white flex items-center justify-center min-h-[44px] min-w-[44px]"
              onClick={() => setMobileOpen(false)}
              data-cursor="link"
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
            {navLinks.map(({ label, target }, i) => (
              <motion.button
                key={target}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => scrollTo(target)}
                data-cursor="link"
                className="font-display text-4xl text-white hover:text-lime transition-colors duration-300"
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
