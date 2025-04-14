import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { semanticClassName, themeLightClassName } from 'vecui'
import { Components } from 'src/components'
import { indexClassName } from './index.css'

function Index() {
  const [themeClassName] = useState(themeLightClassName)

  useEffect(() => {
    const bodyClassNames = [themeClassName, semanticClassName]

    document.body.classList.add(...bodyClassNames)

    return () => {
      document.body.classList.remove(...bodyClassNames)
    }
  }, [themeClassName])

  return (
    <div className={indexClassName}>
      <Components />
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Index
})
