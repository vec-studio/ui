import { createFileRoute } from '@tanstack/react-router'
import { alertPageClassName } from './alert.css'

function AlertPage() {
  return <div className={alertPageClassName}></div>
}

export const Route = createFileRoute()({
  component: AlertPage
})
