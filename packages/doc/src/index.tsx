import { createFileRoute } from '@tanstack/react-router'

function Index() {
  return <div></div>
}

export const Route = createFileRoute('/')({
  component: Index
})
