import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)
import Tilt from 'react-parallax-tilt'
import TechBadge from './TechBadge'

interface ProjectCardProps {
  id: string
  name: string
  category: string
  status: string
  description: string
  techStack: { name: string; link: string }[]
  githubLink: string | null
  liveLink: string | null
  moreInfoLink: string | null
  imageSrc?: string
  index: number
}

const ProjectCard = ({
  name,
  category,
  status,
  description,
  techStack,
  githubLink,
  liveLink,
  moreInfoLink,
  imageSrc,
  index,
}: ProjectCardProps) => {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
      className="h-full"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable
        glareMaxOpacity={0.05}
        glareColor="#C8F264"
        className="h-full"
      >
        <div
          data-cursor="view"
          className="bg-surface rounded-2xl border border-border-subtle overflow-hidden flex flex-col h-full hover:border-zinc-700 transition-colors duration-300"
        >
          {/* Screenshot */}
          {imageSrc && (
            <div className="relative overflow-hidden h-48 bg-surface-2">
              <motion.img
                src={imageSrc}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #111111, transparent)' }}
                aria-hidden="true"
              />
            </div>
          )}

          {/* Body */}
          <div className="p-5 flex flex-col flex-1 gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-surface-2 text-zinc-500 font-mono text-[10px] rounded-full px-2.5 py-0.5">
                {category}
              </span>
              {status === 'live' && (
                <span className="flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                  Live
                </span>
              )}
            </div>

            <h3 className="font-sans font-semibold text-white" style={{ fontSize: '19px' }}>
              {name}
            </h3>

            <p className="font-sans text-muted flex-1 line-clamp-2" style={{ fontSize: '13px', lineHeight: 1.6 }}>
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-1">
              {techStack.slice(0, 4).map((t) => (
                <TechBadge key={t.name} label={t.name} />
              ))}
            </div>

            {(githubLink || liveLink) && (
              <div className="flex items-center gap-4 pt-3 border-t border-border-subtle mt-1">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${name} GitHub repository`}
                    data-cursor="link"
                    className="text-zinc-600 hover:text-lime transition-colors duration-300"
                  >
                    <GithubIcon />
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${name} live demo`}
                    data-cursor="link"
                    className="text-zinc-600 hover:text-lime transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  )

  if (moreInfoLink) {
    return (
      <Link to={moreInfoLink} className="block h-full">
        {card}
      </Link>
    )
  }

  return card
}

export default ProjectCard
