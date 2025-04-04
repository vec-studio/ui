import { type ComponentProps } from 'react'
import { MenuSection as RACMenuSection } from 'react-aria-components'
import { menuSectionClassName } from './menu-section.css'
import { cn } from './utils'

export type MenuSectionProps = ComponentProps<typeof RACMenuSection>

export function MenuSection(props: MenuSectionProps) {
  return <RACMenuSection {...props} className={cn(props.className, menuSectionClassName)} />
}
