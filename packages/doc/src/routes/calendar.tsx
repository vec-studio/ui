import { createFileRoute } from '@tanstack/react-router'
import { calendarPageClassName } from './calendar.css'

function CalendarPage() {
  return <div className={calendarPageClassName}></div>
}

export const Route = createFileRoute()({
  component: CalendarPage
})
