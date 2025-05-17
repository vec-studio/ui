import { type FunctionComponent } from 'react'
import {
  sideNavClassName,
  sideNavContentClassName,
  sideNavContentSectionClassName,
  sideNavHeadClassName
} from './side-nav.css'
import * as vars from 'src/vars'
import { Link } from '@tanstack/react-router'

export const SideNav: FunctionComponent = props => {
  return (
    <div {...props} className={sideNavClassName}>
      <div className={sideNavHeadClassName}>
        <img />
        <h1>{vars.name}</h1>
      </div>
      <div className={sideNavContentClassName}>
        <div className={sideNavContentSectionClassName}>
          <ul>
            <li>
              <Link to="/colors">Colors</Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/shadows-blurs">Shadows & blurs</Link>
            </li>
            <li>
              <Link to="/states">States</Link>
            </li>
            <li>
              <Link to="/icons">Icons</Link>
            </li>
          </ul>
        </div>
        <div className={sideNavContentSectionClassName}>
          <ul>
            <li>
              <Link to="/alert">Alert</Link>
            </li>
            <li>
              <Link to="/avatar">Avatar</Link>
            </li>
            <li>
              <Link to="/badge">Badge</Link>
            </li>
            <li>
              <Link to="/breadcrumb">Breadcrumb</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li>
            <li>
              <Link to="/checkbox">Checkbox</Link>
            </li>
            <li>
              <Link to="/color-area">Color Area</Link>
            </li>
            <li>
              <Link to="/color-slider">Color Slider</Link>
            </li>
            <li>
              <Link to="/color-wheel">Color Wheel</Link>
            </li>
            <li>
              <Link to="/date-table">Date Table</Link>
            </li>
            <li>
              <Link to="/date-picker">Date Picker</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
            <li>
              <Link to="/text-field">Text filed</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
