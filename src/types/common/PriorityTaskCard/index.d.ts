import type { CardProps } from '..'

// === Priority Task Card ===
export type PriorityTaskCardFeedProps = {
  title?: string
  titleClassName?: string
  subTitle?: string
  subTitleClassName?: string
  status?: string
  statusClassName?: string
  bgClassName?: string
}
export type PriorityTaskCardProps = CardProps<PriorityTaskCardFeedProps>
