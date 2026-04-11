import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import TechBadge from './ui/TechBadge'
import MagneticButton from './ui/MagneticButton'

interface Feature {
  name: string
  description: string
}

interface TechItem {
  name: string
  link: string
  desc: string
}

interface ProjectDetailsPageProps {
  title: string
  description: string
  imgSrc: string
  summary: string
  techStack: TechItem[]
  features: Feature[]
  category?: string
  status?: string
  market?: string[]
  metrics?: string[]
  githubLink?: string | null
  liveLink?: string | null
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
})

const ProjectDetailsPage = ({
  title,
  description,
  imgSrc,
  summary,
  techStack,
  features,
  category,
  status,
  market,
  metrics,
  githubLink,
  liveLink,
}: ProjectDetailsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-hero-bg text-white">
      <Navbar />

      {/* Hero area */}
      <div className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)}>
          <Link
            to="/"
            data-cursor="link"
            className="font-mono text-[12px] text-muted hover:text-white transition-colors duration-300"
          >
            ← Back
          </Link>
        </motion.div>

        <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 flex-wrap mt-6">
          {category && (
            <span className="bg-lime/10 text-lime border border-lime/20 font-mono text-[11px] rounded-full px-3 py-1">
              {category}
            </span>
          )}
          {status === 'live' && (
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
              Live
            </span>
          )}
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display text-white mt-4"
          style={{ fontSize: 'clamp(36px, 7vw, 80px)', lineHeight: 1.0 }}
        >
          {title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.15)}
          className="font-sans mt-4 max-w-2xl"
          style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: 1.6, color: '#777' }}
        >
          {description}
        </motion.p>

        {market && market.length > 0 && (
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2 mt-4">
            {market.map((m) => (
              <span key={m} className="bg-lime/10 text-lime font-mono text-xs rounded-full px-3 py-1">
                {m}
              </span>
            ))}
          </motion.div>
        )}

        {metrics && metrics.length > 0 && (
          <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-2 mt-3">
            {metrics.map((m) => (
              <span key={m} className="bg-surface-2 text-zinc-400 font-mono text-xs rounded-full px-3 py-1.5">
                {m}
              </span>
            ))}
          </motion.div>
        )}

        {(githubLink || liveLink) && (
          <motion.div {...fadeUp(0.25)} className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6">
            {githubLink && (
              <MagneticButton
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 text-white font-sans text-sm font-medium rounded-full px-6 py-3 hover:border-zinc-400 transition-colors duration-200"
              >
                GitHub ↗
              </MagneticButton>
            )}
            {liveLink && (
              <MagneticButton
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime text-hero-bg font-sans font-medium rounded-full px-6 py-3 text-sm hover:bg-lime-dim transition-colors duration-200"
              >
                Live Demo ↗
              </MagneticButton>
            )}
          </motion.div>
        )}
      </div>

      {/* Screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-5xl mx-auto px-6 mt-4"
      >
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full rounded-2xl border border-border-subtle object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 mt-20 space-y-20 pb-32">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-[11px] text-muted uppercase tracking-widest">overview</p>
          <p className="mt-4 font-sans" style={{ fontSize: '17px', lineHeight: 1.9, color: '#888' }}>
            {summary}
          </p>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-mono text-[11px] text-muted uppercase tracking-widest">tech stack</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((t) => (
              <TechBadge key={t.name} label={t.name} href={t.link} />
            ))}
          </div>
        </motion.div>

        {/* Features */}
        {features && features.length > 0 && (
          <div>
            <p className="font-mono text-[11px] text-muted uppercase tracking-widest mb-6">features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 }}
                  className="bg-surface rounded-xl border border-border-subtle p-5 hover:border-lime/20 transition-colors duration-300"
                >
                  <p className="font-sans text-[15px] text-white font-medium">{f.name}</p>
                  <p className="font-sans text-muted mt-1" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Back */}
        <div className="flex justify-center pt-4">
          <MagneticButton
            href="/"
            className="border border-zinc-700 text-white font-sans text-sm font-medium rounded-full px-7 py-3.5 hover:border-zinc-400 transition-colors duration-200"
          >
            ← Back to all projects
          </MagneticButton>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProjectDetailsPage
