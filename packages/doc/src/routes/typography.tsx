import { createFileRoute } from '@tanstack/react-router'
import { typographyPageClassName } from './typography.css'

function TypographyPage() {
  return <div className={typographyPageClassName}></div>
}

export const Route = createFileRoute()({
  component: TypographyPage
})
