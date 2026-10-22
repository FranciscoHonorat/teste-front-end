import type { ReactNode } from 'react'
import { Button } from '../Button/Button'
import styles from './PromoBanner.module.scss'

type PromoBannerProps = {
  variant: 'hero' | 'partner'
  title: string
  text: ReactNode
  ctaLabel: string
  ctaHref: string
  imageUrl?: string
}

export function PromoBanner({ variant, title, text, ctaLabel, ctaHref, imageUrl }: PromoBannerProps) {
  const Heading = variant === 'hero' ? 'h1' : 'h2'
  const isHero = variant === 'hero'

  return (
    <div className={`${styles.banner} ${styles[variant]}`}>
      {imageUrl && (
        <img
          className={styles.image}
          src={imageUrl}
          alt=""
          loading={isHero ? 'eager' : 'lazy'}
          fetchPriority={isHero ? 'high' : 'auto'}
        />
      )}
      <div className={styles.content}>
        <Heading className={styles.title}>{title}</Heading>
        <p className={styles.text}>{text}</p>
        <Button variant="yellow" href={ctaHref} className={styles.cta}>
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}
