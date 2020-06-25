import React from "react"
import styled from "styled-components"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { Moon, Sun } from 'react-feather'

import PropTypes from 'prop-types'

class Layout extends React.Component {
    render() {
        const {children} = this.props
        return (
            <Wrapper>
                <DarkModeToggle>
                <ThemeToggler>
                    {({ theme, toggleTheme }) => {
                    const isDark = theme === 'dark';
                    return (
                        <div
                        style={{ color: isDark? 'white' : 'black'  }}
                        onClick={() => toggleTheme(isDark ? 'light' : 'dark')}
                        >{ isDark ? <Sun /> : <Moon />}
                        </div>)
                    }
                    }
                </ThemeToggler>
                </DarkModeToggle>
                {children}
                <Footer>
                © {new Date().getFullYear()}, PractiDev
                </Footer>
            </Wrapper>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.object,
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

export default Layout
