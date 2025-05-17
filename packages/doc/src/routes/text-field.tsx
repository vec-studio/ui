import { createFileRoute } from '@tanstack/react-router'
import { textFieldPageClassName } from './text-field.css'

function TextFieldPage() {
  return <div className={textFieldPageClassName}></div>
}

export const Route = createFileRoute()({
  component: TextFieldPage
})
