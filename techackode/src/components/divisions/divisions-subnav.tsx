import { NavLink } from 'react-router-dom'
import { divisionsNavItems } from '@/data/divisions'
import { Container } from '@/components/common/container'
import { cn } from '@/lib/utils'

type DivisionsSubnavProps = {
  theme?: 'default' | 'home'
}

export function DivisionsSubnav({ theme = 'default' }: DivisionsSubnavProps) {
  const isHomeTheme = theme === 'home'

  return (
    <nav
      aria-label="Divisions section"
      className={cn(
        'sticky top-[4.5rem] z-40 border-b backdrop-blur-xl',
        isHomeTheme
          ? 'border-[rgba(22,55,84,0.1)] bg-white/90'
          : 'border-[var(--border-soft)] bg-[var(--surface-elevated)]/95',
      )}
    >
      <Container className="overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max items-center gap-1.5 sm:gap-2.5">
          {divisionsNavItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/divisions'}
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold tracking-wide uppercase transition sm:px-4 sm:text-sm',
                    isHomeTheme
                      ? isActive
                        ? 'bg-[var(--hp-navy)] text-white shadow-[0_8px_20px_rgba(22,55,84,0.22)]'
                        : 'border border-transparent text-[var(--hp-muted)] hover:border-[var(--hp-border)] hover:bg-white hover:text-[var(--hp-ink)]'
                      : isActive
                        ? 'bg-[var(--ink)] text-[var(--cream)]'
                        : 'text-[var(--ink-muted)] hover:bg-[var(--cream-deep)] hover:text-[var(--ink)]',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}
