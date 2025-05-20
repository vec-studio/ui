import { createFileRoute } from '@tanstack/react-router'
import lodash from 'lodash'
import { type RefCallback } from 'react'
import { Page, PageContent, PageHeader, PageSection } from 'src/components'
import { Button, type ButtonProps } from 'vecui'
import { buttonPageStatesButtonClassName, buttonPageStatesClassName } from './button.css'

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
  const variants: ButtonProps['variant'][] = ['accent', 'primary', 'secondary', 'tertiary', 'negative']
  const states: State[] = [{}, { hovered: true }, { focused: true }, { disabled: true }]

  return (
    <Page>
      <PageHeader title={'Button'} description={'Button'} />
      <PageContent>
        <PageSection title="Size"></PageSection>
        <PageSection title="Label and icon"></PageSection>
        <PageSection title="Variant"></PageSection>
        <PageSection title="State">
          <div className={buttonPageStatesClassName}>
            {states.map(state => (
              <>
                <span>{lodash.chain(state).keys().upperFirst().value() || 'Default'}</span>
                {variants.map(variant => (
                  <Button
                    className={buttonPageStatesButtonClassName}
                    size="small"
                    variant={variant}
                    ref={forceReactAriaState(state)}
                  >
                    Button
                  </Button>
                ))}
              </>
            ))}
          </div>
        </PageSection>
      </PageContent>
    </Page>
  )
}

export const Route = createFileRoute('/_layout/button')({
  component: ButtonPage
})
