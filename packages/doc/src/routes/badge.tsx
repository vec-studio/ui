import { createFileRoute } from '@tanstack/react-router'
import { badgePageClassName } from './badge.css'

function BadgePage() {
  return <div className={badgePageClassName}></div>
}

export const Route = createFileRoute()({
  component: BadgePage
})
