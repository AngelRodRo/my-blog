import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import breakpoint from 'styled-components-breakpoint'

const StyledLink = styled.a`
    display: flex;
    text-decoration: none;
    color: inherit;
    margin: 10px;
    box-shadow: none;
    color: var(--textNormal) !important;

    color: white;
    height: 30px;
`

const StyledProfileImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
`

const StyledUsername = styled.span`
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

export default function UserInfo ({ user }) {
    const userFullname = `${user.fullName}`
    return (
        <StyledLink href={user.profileLink}>
            <StyledProfileImg src={user.picture} />
            <StyledUsername>{userFullname}</StyledUsername>
        </StyledLink>
    )
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
}

UserInfo.displayName = 'UserInfo'
