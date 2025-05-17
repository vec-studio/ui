import { createFileRoute } from '@tanstack/react-router'
import { breadcrumbPageClassName } from './breadcrumb.css'

function BreadcrumbPage() {
  return <div className={breadcrumbPageClassName}></div>
}

export const Route = createFileRoute()({
  component: BreadcrumbPage
})
