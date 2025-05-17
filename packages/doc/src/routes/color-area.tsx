import { createFileRoute } from '@tanstack/react-router'
import { colorAreaPageClassName } from './color-area.css'

function ColorAreaPage() {
  return <div className={colorAreaPageClassName}></div>
}

export const Route = createFileRoute()({
  component: ColorAreaPage
})
