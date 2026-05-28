import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ProductsHero } from '@/components/products/products-hero'

type ProductsPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
  theme?: 'default' | 'home'
}

export function ProductsPageShell({
  badge,
  heading,
  subheading,
  children,
  theme = 'default',
}: ProductsPageShellProps) {
  return (
    <MainLayout variant={theme === 'home' ? 'home' : 'default'}>
      <ProductsHero badge={badge} heading={heading} subheading={subheading} theme={theme} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
