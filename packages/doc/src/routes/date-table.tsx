import { createFileRoute } from '@tanstack/react-router'
import { dateTablePageClassName } from './date-table.css'

function DateTablePage() {
  return <div className={dateTablePageClassName}></div>
}

export const Route = createFileRoute()({
  component: DateTablePage
})
