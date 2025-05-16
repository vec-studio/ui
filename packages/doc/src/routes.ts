import { index, layout, rootRoute, route } from '@tanstack/virtual-file-routes'

export const routes = rootRoute('root.tsx', [
  layout('layout.tsx', [index('index.tsx'), route('list', 'list.tsx'), route('button', 'button.tsx')])
])
