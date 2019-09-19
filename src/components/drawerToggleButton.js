import React from 'react'

import toggleStyles from '../styles/components/drawer-toggle-button.module.scss'

const DrawerToggleButton = (props) => {
  return (
    <button className={toggleStyles.toggleButton} onClick={props.drawerClickHandler}>
      <div className={toggleStyles.toggleButton__line}></div>
      <div className={toggleStyles.toggleButton__line}></div>
      <div className={toggleStyles.toggleButton__line}></div>
    </button>
  )
}

export default DrawerToggleButton