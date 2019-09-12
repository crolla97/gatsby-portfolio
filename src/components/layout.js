import React from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from '../styles/components/layout.module.scss'
import '../styles/index.scss'

const Layout = (props) =>{
  return (
    <div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default Layout