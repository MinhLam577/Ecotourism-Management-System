import type { ReactNode } from 'react'
import type { CardProps } from '..'

// === Popular Post ===
export type PopularPostFeedProps = {
  title?: string
  titleClassName?: string
  subtitle?: string
  subtitleClassName?: string
  value?: ReactNode
  valueClassName?: string
}
export type PopularPostProps = CardProps<PopularPostFeedProps>
