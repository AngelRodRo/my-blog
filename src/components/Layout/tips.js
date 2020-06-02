import React from "react"

import { rhythm, scale } from "../../utils/typography"

import MainLayout from './index'

class TipsLayout extends React.Component {

  render() {
    const { children } = this.props

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
                {children}
            </div>
        </MainLayout>
    )
  }
}


export default TipsLayout
