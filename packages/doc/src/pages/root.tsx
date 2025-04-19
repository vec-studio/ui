import { createRootRoute, type NavigateOptions, Outlet, type ToOptions, useRouter } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-aria-components'
import { semanticClassName, themeLightClassName } from 'vecui'

declare module 'react-aria-components' {
  interface RouterConfig {
    href: ToOptions['to']
    routerOptions: Omit<NavigateOptions, keyof ToOptions>
  }
}

function RootComponent() {
  const router = useRouter()
  const [themeClassName] = useState(themeLightClassName)

  useEffect(() => {
    const bodyClassNames = [themeClassName, semanticClassName]

    document.body.classList.add(...bodyClassNames)

    return () => {
      document.body.classList.remove(...bodyClassNames)
    }
  }, [themeClassName])

  return (
    <RouterProvider
      navigate={(to, options) => router.navigate({ to, ...options })}
      useHref={to => router.buildLocation({ to }).href}
    >
      <Outlet />
    </RouterProvider>
  )
}

export const Route = createRootRoute({
  component: RootComponent
})
