import { createFileRoute } from '@tanstack/react-router'
import { statesPageClassName } from './states.css'

function StatesPage() {
  return <div className={statesPageClassName}></div>
}

export const Route = createFileRoute()({
  component: StatesPage
})
