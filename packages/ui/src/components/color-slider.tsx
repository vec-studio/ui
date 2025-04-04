import { ColorSlider as RACColorSlider, type ColorSliderProps as RACColorSliderProps } from 'react-aria-components'
import { colorSliderClassName } from './color-slider.css'
import { ColorThumb } from './color-thumb'
import { Label } from './label'
import { SliderOutput } from './slider-output'
import { SliderTrack } from './slider-track'
import { cn } from './utils'

export interface ColorSliderProps extends RACColorSliderProps {
  label?: string
}

export function ColorSlider({ label, ...props }: ColorSliderProps) {
  return (
    <RACColorSlider {...props} className={cn(props.className, colorSliderClassName)}>
      <Label>{label}</Label>
      <SliderOutput />
      <SliderTrack
        style={({ defaultStyle }) => ({
          background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </RACColorSlider>
  )
}
