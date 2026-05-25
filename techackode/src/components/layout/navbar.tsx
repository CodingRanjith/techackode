import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/home'
import { GlowButton } from '@/components/common/glow-button'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.classList.remove('dark')
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-[var(--border-soft)] bg-[var(--surface-elevated)]/92 py-3 shadow-sm backdrop-blur-xl'
          : 'bg-transparent py-5',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#hero" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-bold text-[var(--cream)]">
            T
          </span>
          <span className="text-lg font-bold tracking-tight text-[var(--ink)]">Techackode</span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase transition hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <GlowButton href="#contact" size="sm">
            Contact Us
          </GlowButton>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-[var(--border-soft)] bg-[var(--cream-card)] text-[var(--ink)] xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--border-soft)] bg-[var(--surface-elevated)]/98 backdrop-blur-xl xl:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink-muted)] hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]"
                >
                  {link.label}
                </a>
              ))}
              <GlowButton href="#contact" className="mt-2 w-full justify-center">
                Contact Us
              </GlowButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
