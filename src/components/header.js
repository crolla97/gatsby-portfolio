import React from 'react'
import { Link } from 'gatsby'
import ToggleButton from './drawerToggleButton'
import headerStyles from '../styles/components/header.module.scss'

const Header = (props) => {
  return (
    <header>
      <nav>
        <h1><Link to="/">Cristiano</Link></h1>
      </nav>
    </header>
  )
}

export default Header