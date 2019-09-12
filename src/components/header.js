import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../styles/components/header.module.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <h1><Link to="/">Cristiano</Link></h1>
        <ul className={headerStyles.nav__items}>
          <li>
            <Link className={headerStyles.nav__item} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.nav__item} activeClassName={headerStyles.activeNavItem} to="/projects">Projects</Link>
          </li>
          <li>
            <Link className={headerStyles.nav__item} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.nav__item} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header