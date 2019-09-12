import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import homeStyles from '../styles/pages/homePage.module.scss'

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Layout>
      <section className={homeStyles.section}>
        <div className={homeStyles.container}>
          <h1 className={homeStyles.hero}>{data.site.siteMetadata.author}</h1>
          <p  className={homeStyles.description}>Hi! I'm a front-end developer living in Edinburgh. I create amazing websites and web apps to make the internet a better place. Get in touch to discuss how we can work together.</p>
          <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage