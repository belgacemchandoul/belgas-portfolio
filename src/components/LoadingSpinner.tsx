import { motion } from 'framer-motion'

const LoadingSpinner = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-hero-bg flex flex-col items-center justify-center"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* BC monogram */}
      <motion.span
        className="font-display text-white select-none"
        style={{ fontSize: 'clamp(72px, 12vw, 112px)', lineHeight: 1 }}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        BC
      </motion.span>

      {/* Lime progress bar */}
      <div className="mt-10 w-24 h-px bg-border-subtle overflow-hidden rounded-full">
        <motion.div
          className="h-full bg-lime rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export default LoadingSpinner
