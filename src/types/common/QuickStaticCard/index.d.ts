import type { CardProps } from '..'

// === Quick Static Card ===
export type QuickStaticFeedProps = {
  title?: string
  value?: string
  titleClassName?: string
  valueClassName?: string
}
export type QuickStaticCardProps = CardProps<QuickStaticFeedProps>
