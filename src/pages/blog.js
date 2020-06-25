import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from 'prop-types'

import Bio from "src/components/bio"
import Layout from "src/components/Layout/blog"
import SEO from "src/components/seo"
import { rhythm } from "src/utils/typography"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
        <Layout location={this.props.location} title={siteTitle}>
            <SEO title="Todos los articulos" />
                <div style={{ margin: "20px 0 40px" }}>
                    {posts.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug
                        return (
                        <div key={node.fields.slug}>
                            <h3
                            style={{
                                marginBottom: rhythm(1 / 4),
                            }}
                            >
                            <Link
                                style={{ boxShadow: `none` }}
                                to={`/blog${node.fields.slug}`}
                            >
                                {title}
                            </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                            <p
                            dangerouslySetInnerHTML={{
                                __html: node.frontmatter.description || node.excerpt,
                            }}
                            />
                        </div>
                        )
                    })}
                </div>
                <Bio />
            </Layout>
        )
    }
}

export default Blog

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`
Blog.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};
