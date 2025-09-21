import { ColorArea as RACColorArea, ColorAreaProps as RACColorAreaProps } from 'react-aria-components'
import { colorAreaClassName } from './color-area.css'
import { ColorThumb } from './color-thumb'
import { cn } from './utils'

export type ColorAreaProps = RACColorAreaProps

export function ColorArea(props: ColorAreaProps) {
  return (
    <RACColorArea {...props} className={cn(props.className, colorAreaClassName)}>
      <ColorThumb />
    </RACColorArea>
  )
}
