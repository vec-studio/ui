import { createFileRoute } from '@tanstack/react-router'
import { formPageClassName } from './form.css'

function FormPage() {
  return <div className={formPageClassName}></div>
}

export const Route = createFileRoute()({
  component: FormPage
})
