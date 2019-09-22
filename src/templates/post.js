import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
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
  const { previous,next } = props.pageContext;

  return (
    <Layout>
      <main>
        <article>
          <Link to="/blog">← Blog</Link>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <span>{props.data.markdownRemark.frontmatter.date}</span>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
          <nav className={postStyles.blogLinks}>
            <ul>
            <li>{previous && (
                <Link to={`/blog/${previous.fields.slug}`} rel="prev">
                  <span>Previous</span>
                  ← {previous.frontmatter.title}
                </Link>
                )}
              </li>
              <li>{next && (
                <Link to={`/blog/${next.fields.slug}`} rel="next">
                  <span>Next</span>
                  {next.frontmatter.title} →
                </Link>
                )}
              </li>
            </ul>
          </nav>
        </article>
      </main>
    </Layout>
  )
}

export default Blog