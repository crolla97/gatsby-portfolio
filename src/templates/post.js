import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import postStyles from '../styles/templates/post.module.scss'
import '../styles/templates/prism.scss'

export const query = graphql`
query (
  $slug: String!
) {
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
    }
    html
  }
}
`

const Blog = (props) => {
  return (
    <Layout>
      <main>
        <div className={postStyles.wrapper}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <span>{props.data.markdownRemark.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
      </main>
    </Layout>
  )
}

export default Blog