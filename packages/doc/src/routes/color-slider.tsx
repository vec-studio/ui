import { createFileRoute } from '@tanstack/react-router'
import { colorSliderPageClassName } from './color-slider.css'

function ColorSliderPage() {
  return <div className={colorSliderPageClassName}></div>
}

export const Route = createFileRoute()({
  component: ColorSliderPage
})
