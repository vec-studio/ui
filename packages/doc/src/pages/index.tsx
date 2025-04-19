import { createFileRoute } from '@tanstack/react-router'
import { Components } from 'src/components'
import { indexPageClassName } from './index.css'

function IndexPage() {
  return (
    <div className={indexPageClassName}>
      <Components />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: IndexPage
})
