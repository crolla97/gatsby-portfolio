import React, {Component} from 'react'
import Header from './header'
import Footer from './footer'
import layoutStyles from '../styles/components/layout.module.scss'
import SideDrawer from './sideDrawer'
import BurgerMenu from '../components/drawerToggleButton'

import Head from './seo'
import '../styles/index.scss'

class Layout extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  
  render() {

    return (
      <div>
        <Head />
        <div style={{ height: '100%' }}>
          <SideDrawer show={this.state.sideDrawerOpen} />
          <BurgerMenu  drawerClickHandler={this.drawerToggleClickHandler} />
          <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
              <Header />
                <div className={layoutStyles.childContainer}>
                  {this.props.children}
                </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
    )
  }
}


export default Layout