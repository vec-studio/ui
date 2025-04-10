import { type RecipeVariants } from '@vanilla-extract/recipes'
import lodash from 'lodash'
import { type ButtonProps as RACButtonProps, Button as RACButton } from 'react-aria-components'
import { button } from './button.css'
import { cn } from './utils'

export type ButtonProps = RACButtonProps & RecipeVariants<typeof button> & {}

export function Button(props: ButtonProps) {
  const buttonProps = lodash.omit(props, button.variants())
  const buttonStyleProps = lodash.pick(props, button.variants())
  const buttonClassName = button(buttonStyleProps)
  return <RACButton {...buttonProps} className={cn(props.className, buttonClassName)} />
}
