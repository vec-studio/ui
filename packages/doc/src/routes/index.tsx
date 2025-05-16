import { createFileRoute } from '@tanstack/react-router'
import { indexPageClassName } from './index.css'

function IndexPage() {
  return <div className={indexPageClassName}></div>
}

export const Route = createFileRoute('/')({
  component: IndexPage
})
