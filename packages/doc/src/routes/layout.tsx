import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SideNav } from 'src/components/side-nav'
import { layoutClassName } from './layout.css'

function Layout() {
  return (
    <div className={layoutClassName}>
      <SideNav />
      <Outlet />
    </div>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})
