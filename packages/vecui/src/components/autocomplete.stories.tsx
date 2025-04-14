import { Autocomplete } from './autocomplete'
import { MenuItem } from './menu-item'

export function Example() {
  return (
    <Autocomplete label="label" placeholder="placeholder">
      <MenuItem>42</MenuItem>
    </Autocomplete>
  )
}
