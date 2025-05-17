import { createFileRoute } from '@tanstack/react-router'
import { shadowsBlursPageClassName } from './shadows-blurs.css'

function ShadowsBlursPage() {
  return <div className={shadowsBlursPageClassName}></div>
}

export const Route = createFileRoute()({
  component: ShadowsBlursPage
})
