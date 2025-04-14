import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { indexClassName } from './index.css'

function Index() {
  return (
    <div className={indexClassName}>
      <Link to="/preview">Preview</Link>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index
})
