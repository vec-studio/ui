import { createFileRoute } from '@tanstack/react-router'
import { colorsPageClassName } from './colors.css'

function ColorsPage() {
  return <div className={colorsPageClassName}></div>
}

export const Route = createFileRoute()({
  component: ColorsPage
})
