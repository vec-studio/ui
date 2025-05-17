import { index, layout, rootRoute, route } from '@tanstack/virtual-file-routes'

export const routes = rootRoute('root.tsx', [
  layout('layout.tsx', [
    index('index.tsx'),
    //
    route('list', 'list.tsx'),
    //
    route('colors', 'colors.tsx'),
    route('typography', 'typography.tsx'),
    route('shadows-blurs', 'shadows-blurs.tsx'),
    route('states', 'states.tsx'),
    route('icons', 'icons.tsx'),
    //
    route('alert', 'alert.tsx'),
    route('avatar', 'avatar.tsx'),
    route('badge', 'badge.tsx'),
    route('breadcrumb', 'breadcrumb.tsx'),
    route('button', 'button.tsx'),
    route('calendar', 'calendar.tsx'),
    route('checkbox', 'checkbox.tsx'),
    route('color-area', 'color-area.tsx'),
    route('color-slider', 'color-slider.tsx'),
    route('color-wheel', 'color-wheel.tsx'),
    route('date-table', 'date-table.tsx'),
    route('date-picker', 'date-picker.tsx'),
    route('form', 'form.tsx'),
    route('text-filed', 'text-filed.tsx')
  ])
])
