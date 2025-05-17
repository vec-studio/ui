import { createFileRoute } from '@tanstack/react-router'
import { datePickerPageClassName } from './date-picker.css'

function DatePickerPage() {
  return <div className={datePickerPageClassName}></div>
}

export const Route = createFileRoute()({
  component: DatePickerPage
})
