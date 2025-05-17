import { createFileRoute } from '@tanstack/react-router'
import { colorWheelPageClassName } from './color-wheel.css'

function ColorWheelPage() {
  return <div className={colorWheelPageClassName}></div>
}

export const Route = createFileRoute()({
  component: ColorWheelPage
})
