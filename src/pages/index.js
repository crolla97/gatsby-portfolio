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
      <section className={homeStyles.landing}>
        <div className={homeStyles.container}>
          <p className={homeStyles.role}>FRONT-END DEVELOPER</p>
          <h1 className={homeStyles.hero}>I create <span className={homeStyles.highlight}>modern</span> websites using <span className={homeStyles.highlight}>modern</span> technology.</h1>
          <div className={homeStyles.landingBtn}>
            <p><Link to='/projects'>My projects</Link></p>
          </div>
        </div>
      </section>
      <section className={homeStyles.about}>
        <div className={homeStyles.arrowDown}></div>

      </section>

      <section className={homeStyles.projects}>
        <div className={homeStyles.projectsWrapper}>
          <div className={homeStyles.projects__headerBlock}>
            <h1>Recent work</h1>
            <div className={homeStyles.landingBtn}>
              <p><Link to='/projects'>View all.</Link></p>
            </div>
          </div>
          <div className={homeStyles.rwCases}>
            <div className={homeStyles.rwCase}>
              <div className={homeStyles.rwCaseStart}>
                <h3>Web development</h3>
                <h2>Personal Porfolio and <span className={homeStyles.firstChildSpan}>Blog</span></h2>
                <p>Technologies used:</p>
                <ul>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>CSS/SCSS</li>
                  <li>Graphql</li>
                  <li>Netlify</li>
                </ul>
                <div className={homeStyles.rwCaseVcBtn}>
                  <p><Link>View Code</Link></p>
                </div>
              </div>
              <div>
  
              </div>
            </div>
            <div className={homeStyles.rwCase}>
            <div className={homeStyles.rwCaseStart}>
            <h3>Web development</h3>
            <h2>Personal <span className={homeStyles.secondChildSpan}>Porfolio</span> and Blog</h2>
            <p>Technologies used:</p>
            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>CSS/SCSS</li>
              <li>Graphql</li>
              <li>Netlify</li>
            </ul>
            <div className={homeStyles.rwCaseVcBtn}>
              <p><a>View Code</a></p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Like what you see?</p>
          <div>
            <p><a>Get in touch</a></p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage