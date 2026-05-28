import iconLogo from '@/assets/logo/logo (1).png'
import wordmarkLogo from '@/assets/logo/logo (2).png'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

type BrandLogoProps = {
  variant?: 'icon' | 'wordmark'
  className?: string
}

export function BrandLogo({ variant = 'wordmark', className }: BrandLogoProps) {
  const src = variant === 'icon' ? iconLogo : wordmarkLogo
  const alt = variant === 'icon' ? 'Techackode icon' : 'Techackode logo'
  const [processedIconSrc, setProcessedIconSrc] = useState<string | null>(null)

  useEffect(() => {
    if (variant !== 'icon') return

    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.src = iconLogo

    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(image, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Remove near-white background pixels only.
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        if (r > 235 && g > 235 && b > 235) {
          data[i + 3] = 0
        }
      }

      ctx.putImageData(imageData, 0, 0)
      setProcessedIconSrc(canvas.toDataURL('image/png'))
    }
  }, [variant])

  return (
    <img
      src={variant === 'icon' ? (processedIconSrc ?? src) : src}
      alt={alt}
      className={cn(
        'block h-auto object-contain',
        variant === 'icon'
          ? 'w-10 sm:w-11'
          : 'w-[170px] sm:w-[190px]',
        className,
      )}
      loading="eager"
      decoding="async"
    />
  )
}
