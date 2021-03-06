import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import uuid from 'uuid'
import Layout from '../components/layout'
import blogStyles from '../styles/pages/blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date]
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
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
      <main className={blogStyles.main}>
        <div className={blogStyles.container}>
          <h1>Blog</h1>
          <ul >
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={uuid()} className={blogStyles.blog__item}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.description}</p>
                <span>{edge.node.frontmatter.date}</span>
              </Link>
            </li>
          ))} 
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPage