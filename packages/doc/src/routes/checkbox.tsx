import { createFileRoute } from '@tanstack/react-router'
import { checkboxPageClassName } from './checkbox.css'

function CheckboxPage() {
  return <div className={checkboxPageClassName}></div>
}

export const Route = createFileRoute()({
  component: CheckboxPage
})
