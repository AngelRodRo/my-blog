/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import PropTypes from 'prop-types'

import { rhythm } from "../utils/typography"
import youtube from "../icons/youtube.svg"
import github from "../icons/github.svg"
import facebook from "../icons/facebook.svg"
import instagram from "../icons/instagram.svg"


const SocialLink = props => {
    const {imgSrc, href} = props;
    const Link = styled.a`
        margin: 0px 3px;
        text-decoration: none;
        box-shadow: none;
    `

    return (
        <Link href={href} >
            <img width="25" height="25" src={imgSrc} />
        </Link>
    )
}

SocialLink.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

function Bio() {

    const socialLinks = [
        {
            imgSrc: facebook,
            href: "https://facebook.com/practidev"
        },
        {
            imgSrc: instagram,
            href: "https://www.instagram.com/practidev19/"
        },
        {
            imgSrc: youtube,
            href: "https://www.youtube.com/channel/UCT49h0K1819qLW4sNiWgvGw"
        },
        {
            imgSrc: github,
            href: "https://github.com/AngelRodRo"
        }
    ]

    const SocialLinks = socialLinks.map(({imgSrc, href}, idx) =>
        <SocialLink
            key={idx}
            href={href}
            imgSrc={imgSrc}
        />
    );

    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author } = data.site.siteMetadata
                return (
                    <Container>
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            style={{
                                marginRight: rhythm(1 / 2),
                                marginBottom: 0,
                                minWidth: 50,
                                borderRadius: `100%`,
                            }}
                            imgStyle={{
                                borderRadius: `50%`,
                            }}
                        />
                        <div>
                            Escrito por <strong>{author}</strong> quien trabaja para crear un mundo mejor con conocimientos y tecnologia al alcance de todos.
                            Siguéme en:
                        <SocialContainer>
                            {SocialLinks}
                        </SocialContainer>
                        </div>
                    </Container>
                )
            }}
        />
    )
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
                }
            }
        }

        site {
            siteMetadata {
                author
                    social {
                        twitter,
                        youtube
                    }
            }
        }
    }
`

const Container = styled.div`
    display: flex;
`

const SocialContainer = styled.div`
    display: flex;
`
export default Bio
