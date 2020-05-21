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

import { rhythm } from "../utils/typography"
import youtube from "../icons/youtube.svg"
import github from "../icons/github.svg"

function Bio() {

  const socialLinks = [
    {
      id: 1,
      imgSrc: youtube,
      href: "https://www.youtube.com/channel/UCT49h0K1819qLW4sNiWgvGw"
    },
    {
      id: 2,
      imgSrc: github,
      href: "https://github.com/AngelRodRo"
    }
  ]

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

  const SocialLinks = socialLinks.map(({id, imgSrc, href}) =>
    <SocialLink
      key={id}
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
              <p>
                Escrito divor <strong>{author}</strong> quien trabaja para crear un mundo mejor con conocimientos y tecnologia al alcance de todos.
                {` `}
                Siguéme en:
              </p>
              <br />
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
