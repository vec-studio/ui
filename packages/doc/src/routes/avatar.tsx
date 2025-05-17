import { createFileRoute } from '@tanstack/react-router'
import { avatarPageClassName } from './avatar.css'

function AvatarPage() {
  return <div className={avatarPageClassName}></div>
}

export const Route = createFileRoute()({
  component: AvatarPage
})
