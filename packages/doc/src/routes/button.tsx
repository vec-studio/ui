import { createFileRoute } from '@tanstack/react-router'
import { ChevronDownIcon } from 'lucide-react'
import { type RefCallback } from 'react'
import { Button, ButtonProps } from 'vecui'
import { buttonGroupClassName, buttonPageClassName } from './button.css'

type State = {
  disabled?: boolean
  focused?: boolean
  hovered?: boolean
}

function forceReactAriaState<T extends HTMLElement>(state: State = {}): RefCallback<T> {
  return (element: HTMLElement | null) => {
    if (!element) return
    element.style.pointerEvents = 'none'
    for (const [key, value] of Object.entries(state)) {
      element.dataset[key] = value ? 'true' : 'false'
    }
  }
}

function ButtonPage() {
  const sizes: ButtonProps['size'][] = ['small', 'medium', 'large']
  const variants: ButtonProps['variant'][] = ['default', 'secondary', 'tertiary', 'danger']
  const states: State[] = [{}, { hovered: true }, { focused: true }, { disabled: true }]

  return (
    <div className={buttonPageClassName}>
      {variants.map(variant =>
        states.map(state =>
          sizes.map(size => (
            <div className={buttonGroupClassName}>
              <Button size={size} variant={variant} ref={forceReactAriaState(state)}>
                Button
              </Button>
              <Button size={size} variant={variant} ref={forceReactAriaState(state)}>
                <ChevronDownIcon />
                <span>Button</span>
              </Button>
              <Button size={size} variant={variant} ref={forceReactAriaState(state)}>
                <span>Button</span>
                <ChevronDownIcon />
              </Button>
              <Button size={size} variant={variant} ref={forceReactAriaState(state)}>
                <ChevronDownIcon />
              </Button>
              <Button style={{ width: '160px' }} size={size} variant={variant} ref={forceReactAriaState(state)}>
                <span>Button</span>
                <ChevronDownIcon />
              </Button>
            </div>
          ))
        )
      )}
    </div>
  )
}

export const Route = createFileRoute('/_layout/button')({
  component: ButtonPage
})
