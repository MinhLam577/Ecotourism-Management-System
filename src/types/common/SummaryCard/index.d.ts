import type { ReactNode } from 'react'

// === Summary Card (khác biệt nên tách riêng) ===
export interface SummaryCardProps {
  bgColor?: string
  textColor?: string
  borderColor?: string
  icon?: ReactNode
  title?: string
  value?: string
  subtitle?: string
}
