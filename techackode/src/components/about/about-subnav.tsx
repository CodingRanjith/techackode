import { NavLink } from 'react-router-dom'
import { aboutNavItems } from '@/data/about'
import { Container } from '@/components/common/container'
import { cn } from '@/lib/utils'

export function AboutSubnav() {
  return (
    <nav
      aria-label="About section"
      className="sticky top-[4.5rem] z-40 border-b border-[var(--border-soft)] bg-[var(--surface-elevated)]/95 backdrop-blur-xl"
    >
      <Container className="overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="flex min-w-max items-center gap-1 sm:gap-2">
          {aboutNavItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                end={item.href === '/about'}
                className={({ isActive }) =>
                  cn(
                    'whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold tracking-wide uppercase transition sm:px-4 sm:text-sm',
                    isActive
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
