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
            <div>
              <Link to='/projects'>
                My projects
                <div className={homeStyles.btnArrow}></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
        
      <section className={homeStyles.about}>
        <div className={homeStyles.arrowDown}></div>
        <div className={homeStyles.aboutContainer}>
          <div className={homeStyles.aboutTop}>
            <div className={homeStyles.aboutTopLeft}>
              <h2>What I can do</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed blandit libero. Duis ultricies lacus sed turpis tincidunt id aliquet. Porttitor massa id neque aliquam vestibulum morbi blandit.</p>
            </div>
            <div className={homeStyles.aboutTopRight}>
              <ul>
                <p>DESIGN</p>
                <li>Prototyping</li>
                <li>Web design</li>
              </ul>
              <ul>
              <p>DEVELOPMENT</p>
              <li>Web developement</li>              
              </ul>
            </div>
          </div>
          <div className={homeStyles.aboutBottom}>
            <h3>I also blog a little...</h3>
            <div className={homeStyles.blogLink}>
              <h4>recent post</h4>
              <Link to="/blog/learning-gatsby">Learning Gatsby</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={homeStyles.projects}>
        <div className={homeStyles.projectsWrapper}>
          <div className={homeStyles.projects__headerBlock}>
            <h1>Recent work</h1>
            <div className={homeStyles.landingBtn}>
              <Link to='/projects'>
                View all.
                <div className={homeStyles.btnArrow}></div>
              </Link>
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
                  <a href="#">View Code</a>
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
              <a href="#">View Code</a>
              <div></div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>
      <section className={homeStyles.contact}>
        <div>
          <h3>Like what you see?</h3>
          <div className={homeStyles.contactBtn}>
            <Link to="/contact">Come find me</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage