import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TechBadgeProps {
  label: string
  href?: string
}

const TECH_URLS: Record<string, string> = {
  'React': 'https://react.dev',
  'TypeScript': 'https://www.typescriptlang.org',
  'Tailwind CSS': 'https://tailwindcss.com',
  'Framer Motion': 'https://www.framer.com/motion',
  'Vite': 'https://vitejs.dev',
  'Python': 'https://www.python.org',
  'FastAPI': 'https://fastapi.tiangolo.com',
  'Node.js': 'https://nodejs.org',
  'WebSockets': 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
  'Celery': 'https://docs.celeryq.dev',
  'LangGraph': 'https://langchain-ai.github.io/langgraph',
  'LangChain': 'https://www.langchain.com',
  'Claude API': 'https://docs.anthropic.com',
  'Hugging Face': 'https://huggingface.co',
  'PostgreSQL': 'https://www.postgresql.org',
  'Supabase': 'https://supabase.com',
  'Prisma ORM': 'https://www.prisma.io',
  'Redis': 'https://redis.io',
  'MongoDB': 'https://www.mongodb.com',
  'Railway': 'https://railway.app',
  'Vercel': 'https://vercel.com',
  'Netlify': 'https://netlify.com',
  'Docker': 'https://www.docker.com',
  'GitHub Actions': 'https://github.com/features/actions',
  'Twilio': 'https://www.twilio.com',
  'Next.js': 'https://nextjs.org',
  'REST APIs': 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
  'Prompt Engineering': 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
}

const BadgeInner = ({ label, isHovered }: { label: string; isHovered: boolean }) => (
  <motion.span
    data-cursor="link"
    animate={
      isHovered
        ? {
            backgroundColor: 'rgba(200,242,100,0.08)',
            color: '#C8F264',
            borderColor: 'rgba(200,242,100,0.3)',
            scale: 1.05,
            boxShadow: '0 0 12px rgba(200,242,100,0.15)',
          }
        : {
            backgroundColor: 'rgba(26,26,26,1)',
            color: '#a1a1aa',
            borderColor: 'rgba(39,39,42,1)',
            scale: 1,
            boxShadow: '0 0 0px rgba(200,242,100,0)',
          }
    }
    transition={{ duration: 0.2, ease: 'easeOut' }}
    className="inline-flex items-center gap-1 font-mono text-xs rounded-full px-3 py-1 border border-zinc-800 whitespace-nowrap"
    style={{ borderWidth: '0.5px' }}
  >
    {label}
    <AnimatePresence>
      {isHovered && (
        <motion.span
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -4 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          aria-hidden="true"
          className="text-lime"
        >
          ↗
        </motion.span>
      )}
    </AnimatePresence>
  </motion.span>
)

const TechBadge = ({ label, href }: TechBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }

  const resolvedHref = href ?? TECH_URLS[label]

  if (resolvedHref) {
    return (
      <a
        href={resolvedHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} documentation`}
        onClick={(e) => e.stopPropagation()}
        {...handlers}
      >
        <BadgeInner label={label} isHovered={isHovered} />
      </a>
    )
  }

  return (
    <div {...handlers}>
      <BadgeInner label={label} isHovered={isHovered} />
    </div>
  )
}

export default TechBadge
