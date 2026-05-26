import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '@/data/home'
import { aboutNavItems } from '@/data/about'
import { AboutDropdown } from '@/components/layout/about-dropdown'
import { GlowButton } from '@/components/common/glow-button'
import { cn } from '@/lib/utils'
import { scrollToHash, scrollToTop } from '@/lib/scroll'

function NavAnchor({
  href,
  label,
  onClick,
  className,
  isHome,
}: {
  href: string
  label: string
  onClick?: () => void
  className?: string
  isHome?: boolean
}) {
  const location = useLocation()
  const resolvedHref =
    href.startsWith('#') && location.pathname !== '/' ? `/${href}` : href
  const hashIndex = resolvedHref.indexOf('#')
  const hasHash = hashIndex !== -1
  const isRoute = resolvedHref.startsWith('/') && !hasHash
  const linkClass = cn(
    'rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition',
    isHome
      ? 'text-[var(--hp-muted)] uppercase hover:bg-[var(--hp-bg-subtle)] hover:text-[var(--hp-navy)]'
      : 'text-[var(--ink-muted)] uppercase hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]',
    className,
  )

  const handleClick = () => {
    onClick?.()
    if (isRoute) {
      scrollToTop()
      return
    }
    if (hasHash) {
      const hash = resolvedHref.slice(hashIndex)
      if (location.pathname === '/' && !resolvedHref.startsWith('/')) {
        scrollToHash(hash)
      }
    }
  }

  if (isRoute || hasHash) {
    return (
      <Link to={resolvedHref} onClick={handleClick} className={linkClass}>
        {label}
      </Link>
    )
  }

  return (
    <a href={resolvedHref} onClick={handleClick} className={linkClass}>
      {label}
    </a>
  )
}

type NavbarProps = {
  variant?: 'default' | 'home'
}

export function Navbar({ variant = 'default' }: NavbarProps) {
  const isHome = variant === 'home'
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
          ? isHome
            ? 'py-3'
            : 'border-b border-[var(--border-soft)] bg-[var(--surface-elevated)]/92 py-3 shadow-sm backdrop-blur-xl'
          : 'bg-transparent py-5',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8',
          isHome && scrolled && 'hp-nav-glass rounded-2xl py-3',
          isHome && !scrolled && 'pt-1',
        )}
      >
        <Link
          to="/"
          onClick={() => scrollToTop()}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span
            className={cn(
              'flex size-9 items-center justify-center rounded-full text-sm font-bold text-white',
              isHome ? 'bg-[var(--hp-navy)]' : 'bg-[var(--ink)] text-[var(--cream)]',
            )}
          >
            T
          </span>
          <span
            className={cn(
              'brand-wordmark text-lg',
              isHome ? 'text-[var(--hp-navy)]' : 'text-[var(--ink)]',
            )}
          >
            Techackode
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((link) =>
            link.label === 'About Us' ? (
              <AboutDropdown key={link.href} />
            ) : (
              <NavAnchor key={link.href} href={link.href} label={link.label} isHome={isHome} />
            ),
          )}
        </nav>

        <div className="hidden sm:block">
          {isHome ? (
            <Link to="/contact" onClick={() => scrollToTop()} className="hp-btn-primary !py-2.5 !text-sm">
              Contact Us
            </Link>
          ) : (
            <GlowButton href="/contact" size="sm" onClick={() => scrollToTop()}>
              Contact Us
            </GlowButton>
          )}
        </div>

        <button
          type="button"
          className={cn(
            'flex size-10 items-center justify-center rounded-full border xl:hidden',
            isHome
              ? 'border-[var(--hp-accent)] bg-white/90 text-[var(--hp-ink)]'
              : 'border-[var(--border-soft)] bg-[var(--cream-card)] text-[var(--ink)]',
          )}
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
            className={cn(
              'overflow-hidden border-t backdrop-blur-xl xl:hidden',
              isHome
                ? 'border-[var(--hp-accent)] bg-white/95'
                : 'border-[var(--border-soft)] bg-[var(--surface-elevated)]/98',
            )}
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) =>
                link.label === 'About Us' ? (
                  <div key={link.href} className="space-y-1">
                    <Link
                      to="/about"
                      onClick={() => {
                        scrollToTop()
                        setOpen(false)
                      }}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-[var(--ink-muted)] hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]"
                    >
                      About Us
                    </Link>
                    {aboutNavItems
                      .filter((item) => item.href !== '/about')
                      .map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => {
                            scrollToTop()
                            setOpen(false)
                          }}
                          className="block rounded-xl py-2 pr-4 pl-8 text-sm text-[var(--ink-muted)] hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]"
                        >
                          {item.label}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <NavAnchor
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold normal-case tracking-normal"
                    isHome={isHome}
                  />
                ),
              )}
              <GlowButton
                href="/contact"
                className="mt-2 w-full justify-center"
                onClick={() => {
                  scrollToTop()
                  setOpen(false)
                }}
              >
                Contact Us
              </GlowButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
