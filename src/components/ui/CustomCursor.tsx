import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type CursorState = 'default' | 'link' | 'view'

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>('default')
  const [clicking, setClicking] = useState(false)
  const [visible, setVisible] = useState(false)

  // On touch/coarse-pointer devices (phones, tablets) the cursor is completely hidden —
  // no mousemove events fire, so rendering the cursor just leaves a stuck dot on screen.
  const [isTouchDevice] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
  )

  // Dot follows mouse directly (no spring)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  // Ring follows with spring physics
  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const ringX = useSpring(rawX, { stiffness: 120, damping: 22 })
  const ringY = useSpring(rawY, { stiffness: 120, damping: 22 })

  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Don't attach any listeners on touch devices
    if (isTouchDevice) return

    const onMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        dotX.set(e.clientX)
        dotY.set(e.clientY)
        rawX.set(e.clientX)
        rawY.set(e.clientY)
      })

      // Show the cursor on first move (avoids flash at 0,0 on mount)
      setVisible(true)

      // Detect cursor state from data-cursor attribute on the hovered element
      const target = e.target as HTMLElement
      const closest = target.closest('[data-cursor]') as HTMLElement | null
      const state = closest?.dataset.cursor as CursorState | undefined
      setCursorState(state ?? 'default')
    }

    const onDown = () => setClicking(true)
    // mouseup on window so it always fires even if the pointer releases outside a button
    const onUp = () => setClicking(false)
    // Hide the cursor dot when the pointer leaves the viewport
    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('mouseleave', onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [dotX, dotY, rawX, rawY, isTouchDevice])

  // No cursor on touch devices
  if (isTouchDevice) return null

  // Ring size / color based on state
  const ringSize = cursorState === 'link' ? 48 : cursorState === 'view' ? 64 : 32
  const ringColor =
    cursorState === 'link' || cursorState === 'view'
      ? 'rgba(200,242,100,0.5)'
      : 'rgba(255,255,255,0.18)'
  const ringScale = clicking ? 0.8 : 1

  // Dot hidden when hovering a link or cursor is outside the viewport
  const dotOpacity = cursorState === 'link' || !visible ? 0 : 1
  const dotSize = 8

  return (
    <>
      {/* Small dot — tracks precisely, pointer-events-none so it never blocks clicks */}
      <motion.div
        aria-hidden="true"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: dotSize,
          height: dotSize,
          opacity: dotOpacity,
        }}
        className="fixed top-0 left-0 z-[9999] rounded-full bg-white pointer-events-none"
      />

      {/* Ring — springs behind the dot, pointer-events-none at all times */}
      <motion.div
        aria-hidden="true"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: ringSize,
          height: ringSize,
          borderColor: ringColor,
          scale: ringScale,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="fixed top-0 left-0 z-[9998] rounded-full border pointer-events-none flex items-center justify-center"
      >
        {cursorState === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="font-mono text-[9px] text-lime tracking-widest uppercase"
          >
            view
          </motion.span>
        )}
      </motion.div>
    </>
  )
}

export default CustomCursor
