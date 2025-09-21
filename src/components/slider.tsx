import { Slider as RACSlider, SliderProps as RACSliderProps } from 'react-aria-components'
import { Label } from './label'
import { SliderOutput } from './slider-output'
import { SliderThumb } from './slider-thumb'
import { SliderTrack } from './slider-track'
import { sliderClassName } from './slider.css'
import { cn } from './utils'

export interface SliderProps<T> extends RACSliderProps<T> {
  label?: string
  thumbLabels?: string[]
}

export function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: SliderProps<T>) {
  return (
    <RACSlider {...props} className={cn(props.className, sliderClassName)}>
      {label && <Label>{label}</Label>}
      <SliderOutput>{({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}</SliderOutput>
      <SliderTrack>
        {({ state }) => state.values.map((_, i) => <SliderThumb key={i} index={i} RAC-label={thumbLabels?.[i]} />)}
      </SliderTrack>
    </RACSlider>
  )
}
