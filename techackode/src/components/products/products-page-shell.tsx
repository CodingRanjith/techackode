import type { ReactNode } from 'react'
import { MainLayout } from '@/layouts/main-layout'
import { ProductsHero } from '@/components/products/products-hero'

type ProductsPageShellProps = {
  badge?: string
  heading: string
  subheading?: string
  children: ReactNode
}

export function ProductsPageShell({
  badge,
  heading,
  subheading,
  children,
}: ProductsPageShellProps) {
  return (
    <MainLayout>
      <ProductsHero badge={badge} heading={heading} subheading={subheading} />
      <div className="pb-24 sm:pb-32">{children}</div>
    </MainLayout>
  )
}
