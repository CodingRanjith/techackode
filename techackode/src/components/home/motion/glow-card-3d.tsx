import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionProps,
} from 'framer-motion'
import { useCallback, useRef, type MouseEvent, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

const TILT = 10

export type GlowCard3DProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
  index?: number
  glow?: boolean
  animateIn?: boolean
} & Pick<MotionProps, 'whileHover' | 'whileTap'>

export function GlowCard3D({
  children,
  className,
  innerClassName,
  index = 0,
  glow = true,
  animateIn = true,
  whileHover,
  whileTap,
}: GlowCard3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [TILT, -TILT]), {
    stiffness: 260,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-TILT, TILT]), {
    stiffness: 260,
    damping: 22,
  })

  const onMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      mx.set((e.clientX - rect.left) / rect.width - 0.5)
      my.set((e.clientY - rect.top) / rect.height - 0.5)
    },
    [mx, my, reduceMotion],
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <div className={cn('hp-card-3d-perspective', className)}>
      <motion.div
        ref={ref}
        className="hp-card-3d"
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: 'preserve-3d' as const }
        }
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial={animateIn ? { opacity: 0, y: 28 } : false}
        whileInView={animateIn ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.65,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={whileHover ?? { y: -6, transition: { duration: 0.35 } }}
        whileTap={whileTap}
      >
        {glow && <div className="hp-card-3d__glow" aria-hidden />}
        <div className={cn('hp-card-3d__inner', innerClassName)}>
          <div className="hp-card-3d__shine" aria-hidden />
          {children}
        </div>
      </motion.div>
    </div>
  )
}
