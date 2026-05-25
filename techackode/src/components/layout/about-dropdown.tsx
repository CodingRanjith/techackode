import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { aboutNavItems } from '@/data/about'
import { cn } from '@/lib/utils'
import { scrollToTop } from '@/lib/scroll'

export function AboutDropdown() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isAboutSection = location.pathname.startsWith('/about')

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to="/about"
        onClick={() => scrollToTop()}
        className={cn(
          'inline-flex items-center gap-1 rounded-full px-3 py-2 text-xs font-semibold tracking-wide uppercase transition',
          isAboutSection
            ? 'bg-[var(--cream-deep)] text-[var(--ink)]'
            : 'text-[var(--ink-muted)] hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]',
        )}
      >
        About Us
        <ChevronDown className={cn('size-3.5 transition', open && 'rotate-180')} />
      </Link>
      {open && (
        <div className="absolute top-full left-0 z-50 mt-1 min-w-[220px] rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-elevated)] p-2 shadow-lg">
          {aboutNavItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => scrollToTop()}
              className="block rounded-xl px-4 py-2.5 transition hover:bg-[var(--cream-deep)]"
            >
              <span className="block text-sm font-semibold text-[var(--ink)]">{item.label}</span>
              <span className="mt-0.5 block text-xs landing-muted">{item.description}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
