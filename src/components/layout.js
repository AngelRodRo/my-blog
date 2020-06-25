import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Moon, Sun } from 'react-feather'
import PropTypes from 'prop-types'
import { rhythm, scale } from 'src/utils/typography'

import Newsletter from '../components/Newsletter'

class Layout extends React.Component {

    render() {
        const { location, title, children } = this.props
        const rootPath = `${__PATH_PREFIX__}/` //eslint-disable-line
        const blogPath = `${__PATH_PREFIX__}/blog` //eslint-disable-line
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
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={location.pathname === blogPath ? '/blog/' : '/'}
                    >
                    {title}
                    </Link>
                </h1>
            )
        } else {
            header = (
                <h3
                    style={{
                    fontFamily: 'Montserrat, sans-serif',
                    marginTop: 0,
                    }}
                >
                    <Link
                    style={{
                        boxShadow: 'none',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    to={'/blog/'}
                    >
                    {title}
                    </Link>
                </h3>
            )
        }

        return (
            <Wrapper>
                <DarkModeToggle>
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => {
                                const isDark = theme === 'dark'
                                return (
                                    <div
                                    style={{ color: isDark? 'white' : 'black'  }}
                                    onClick={() => toggleTheme(isDark ? 'light' : 'dark')}
                                    >{ isDark ? <Sun /> : <Moon />}
                                    </div>
                                )
                            }
                        }
                    </ThemeToggler>
                </DarkModeToggle>
                <div
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
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
                <Footer>
                    © {new Date().getFullYear()}, PractiDev
                </Footer>
            </Wrapper>
        )
    }
}

const DarkModeToggle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    cursor: pointer;
`

const Wrapper = styled.div`
    min-height: 100vh;
    position: relative;
`

const Footer = styled.footer`
    text-align: center;
    margin: 24px;
`

Layout.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.object,
}

export default Layout
