import { useRef, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  download?: boolean | string
  target?: string
  rel?: string
}

const springConfig = { stiffness: 200, damping: 20 }

const MagneticButton = ({
  children,
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * 0.4
    const deltaY = (e.clientY - centerY) * 0.4
    x.set(Math.max(-8, Math.min(8, deltaX)))
    y.set(Math.max(-8, Math.min(8, deltaY)))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      {href ? (
        <a
          href={href}
          download={download}
          target={target}
          rel={rel}
          data-cursor="link"
          className={className}
        >
          {children}
        </a>
      ) : (
        <button
          onClick={onClick}
          data-cursor="link"
          className={className}
        >
          {children}
        </button>
      )}
    </motion.div>
  )

  return inner
}

export default MagneticButton
