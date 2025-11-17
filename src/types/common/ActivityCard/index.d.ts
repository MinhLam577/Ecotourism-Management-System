import type { CardProps } from '..'

// === Activity Card ===
export type ActivityFeedProps = {
  bgColorClassName?: string
  markColorClassName?: string
  descColorClassName?: string
  time?: string
  timeColorClassName?: string
  desc?: string
}
export type ActivityCardProps = CardProps<ActivityFeedProps> & {
  customClassNameWrapper?: string
  customClassNameTitle?: string
}
