import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

import Newsletter from '../Newsletter'

import MainLayout from './index'

class BlogLayout extends React.Component {

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog`
    let header


    if ([rootPath, blogPath].includes(location.pathname)) {
      header = (
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={location.pathname === blogPath ? `/blog/` : `/`}
            >
              {title}
            </Link>
          </h1>
      )
    } else {
      header = (
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/blog/`}
            >
              {title}
            </Link>
          </h3>
      )
    }

    return (
        <MainLayout>
            <div
                style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                    backgroundColor: 'var(--bg)',
                    color: 'var(--textNormal)',
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                }}
            >
                <header>
                    {header}
                </header>
                <Newsletter />
                <main id="main">{children}</main>
            </div>
        </MainLayout>
    )
  }
}


export default BlogLayout
