import { createFileRoute } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'

function Layout() {
  return <Outlet />
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})
