import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { semanticClassName, themeLightClassName } from 'vecui'
import { Components } from './components'

export const Route = createFileRoute('/preview')({
  component() {
    const [themeClassName] = useState(themeLightClassName)

    useEffect(() => {
      const bodyClassNames = [themeClassName, semanticClassName]

      document.body.classList.add(...bodyClassNames)

      return () => {
        document.body.classList.remove(...bodyClassNames)
      }
    }, [themeClassName])

    return (
      <div className={rootClassName}>
        <Components />
      </div>
    )
  }
})
