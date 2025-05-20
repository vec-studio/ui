import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SideNav } from 'src/components/side-nav'
import { layloutMainClassName, layoutClassName } from './layout.css'

function Layout() {
  return (
    <div className={layoutClassName}>
      <SideNav />
      <div className={layloutMainClassName}>
        <Outlet />
      </div>
    </div>
  )
}

export const Route = createFileRoute('/_layout')({
  component: Layout
})
