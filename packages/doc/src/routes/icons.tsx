import { createFileRoute } from '@tanstack/react-router'
import { iconsPageClassName } from './icons.css'

function IconsPage() {
  return <div className={iconsPageClassName}></div>
}

export const Route = createFileRoute()({
  component: IconsPage
})
