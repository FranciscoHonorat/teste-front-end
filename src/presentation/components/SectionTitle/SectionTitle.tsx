import type { ReactNode } from 'react'
import styles from './SectionTitle.module.scss'

type SectionTitleProps = {
  id: string
  children: ReactNode
  withLines?: boolean
}

export function SectionTitle({ id, children, withLines = false }: SectionTitleProps) {
  return (
    <h2 id={id} className={`${styles.title} ${withLines ? styles.withLines : ''}`}>
      {children}
    </h2>
  )
}
