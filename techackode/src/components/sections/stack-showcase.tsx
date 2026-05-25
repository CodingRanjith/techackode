import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { Layers, Moon, Sparkles, Sun } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HeroScene } from '@/components/three/hero-scene'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAppStore } from '@/stores/use-app-store'

import 'swiper/css'
import 'swiper/css/pagination'

const STACK = [
  'React + Vite + TypeScript',
  'Tailwind CSS',
  'Shadcn UI',
  'Framer Motion',
  'Lucide Icons',
  'Swiper JS',
  'Zustand',
  'TanStack Query',
  'GSAP',
  'React Three Fiber',
] as const

async function fetchStackStatus() {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return { status: 'ready', packages: STACK.length }
}

export function StackShowcase() {
  const gsapRef = useRef<HTMLHeadingElement>(null)
  const theme = useAppStore((s) => s.theme)
  const toggleTheme = useAppStore((s) => s.toggleTheme)

  const { data, isLoading } = useQuery({
    queryKey: ['stack-status'],
    queryFn: fetchStackStatus,
  })

  useLayoutEffect(() => {
    if (!gsapRef.current) return
    gsap.from(gsapRef.current, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-5xl flex-col gap-10 px-6 py-16">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="space-y-2">
          <Badge variant="secondary" className="gap-1">
            <Sparkles className="size-3.5" />
            Techackode UI Stack
          </Badge>
          <h1
            ref={gsapRef}
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Build with a modern React toolkit
          </h1>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            Tailwind, Shadcn, motion libraries, data fetching, and 3D — wired
            and ready for your product UI.
          </p>
        </div>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </motion.header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="size-5" />
              Stack modules
            </CardTitle>
            <CardDescription>
              TanStack Query:{' '}
              {isLoading
                ? 'loading…'
                : `${data?.status} (${data?.packages} packages)`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={12}
              slidesPerView={1.2}
              breakpoints={{ 640: { slidesPerView: 2 } }}
              autoplay={{ delay: 2800, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-10!"
            >
              {STACK.map((item) => (
                <SwiperSlide key={item}>
                  <div className="bg-muted/50 flex h-24 items-center justify-center rounded-lg border px-4 text-center text-sm font-medium">
                    {item}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>React Three Fiber</CardTitle>
              <CardDescription>Interactive hero preview</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <HeroScene />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
