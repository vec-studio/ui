import { createFileRoute } from '@tanstack/react-router'
import { Components } from 'src/components'
import { listPageClassName } from './list.css'

function ListPage() {
  return (
    <div className={listPageClassName}>
      <Components />
    </div>
  )
}

export const Route = createFileRoute('/list')({
  component: ListPage
})
