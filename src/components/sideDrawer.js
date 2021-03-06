import React from 'react'
import drawerStyles from '../styles/components/side-drawer.module.scss'

import { Link, useStaticQuery, graphql } from 'gatsby'

const SideDrawer = (props) => {

  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter:{ featured:{ eq: true } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
  `)

  let side = drawerStyles.sideDrawer;
  let open = drawerStyles.open;
  let drawerClasses = side;
  if (props.show) {
    drawerClasses = `${side} ${open}`
  }
  return (
    <nav className={drawerClasses}>
      <div className={drawerStyles.nav}>
        <ul className={drawerStyles.nav__items}>
          <li><Link className={drawerStyles.nav__item} activeClassName={drawerStyles.nav__itemActive} to="/" >Home</Link></li>
          <li><Link className={drawerStyles.nav__item} activeClassName={drawerStyles.nav__itemActive} to="/projects" >Projects</Link></li>
          <li><Link className={drawerStyles.nav__item} activeClassName={drawerStyles.nav__itemActive} to="/blog" >Blog</Link></li>
          <li><Link className={drawerStyles.nav__item} activeClassName={drawerStyles.nav__itemActive} to="/about" >About</Link></li>
          <li><Link className={drawerStyles.nav__item} activeClassName={drawerStyles.nav__itemActive} to="/contact" >Contact</Link></li>
        </ul>
      </div>
      <div className={drawerStyles.recentWork}>
        <div className={drawerStyles.recentWorkContainer}>
          <h3>Recent Blog Post</h3>
          <Link to={`/blog/${data.markdownRemark.fields.slug}`}>{data.markdownRemark.frontmatter.title}</Link>
        </div>
        <div className={drawerStyles.recentWorkContainer}>
          <h3>Recent Work</h3>
          <a href="/">Portfolio Website & Blog</a>
        </div>
      </div>
    </nav>
  )
}

export default SideDrawer