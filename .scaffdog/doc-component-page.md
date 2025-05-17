---
name: 'doc-component-page'
root: 'packages/doc/src/routes'
output: '**/*'
ignore: []
questions:
  name: 'Component Page Name'
---

# Variables

- camelName: `{{ inputs.name | camel }}`
- kebabName: `{{ inputs.name | kebab }}`
- pascalName: `{{ inputs.name | pascal }}`

# `{{ kebabName }}.css.ts`

```typescript
import { style } from '@vanilla-extract/css'

export const {{ camelName }}PageClassName = style({})
```

# `{{ kebabName }}.tsx`

```typescript
import { createFileRoute } from '@tanstack/react-router'
import { {{ camelName }}PageClassName } from './{{ kebabName }}.css'

function {{ pascalName }}Page() {
  return <div className={ {{ camelName }}PageClassName }></div>
}

export const Route = createFileRoute()({
  component: {{ pascalName }}Page
})
```
