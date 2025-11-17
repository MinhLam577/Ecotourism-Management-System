export * from './ActivityCard'
export * from './PopularPostCard'
export * from './PriorityTaskCard'
export * from './QuickStaticCard'
export * from './SummaryCard'
export * from './UserActivityCard'
// === Base Card Generic ===
export type CardProps<TFeed> = {
  title?: string
  titleClassName?: string
  bgClassName?: string
  data: TFeed[]
}
