import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import uuid from 'uuid'
import Layout from '../components/layout'
import blogStyles from '../styles/pages/blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <main>
        <div className={blogStyles.container}>
          <h1>Blog</h1>
          <ol >
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={uuid()} className={blogStyles.blog__item}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          ))} 
          </ol>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPage