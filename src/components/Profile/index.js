import React from 'react'
import { LogOut } from 'react-feather'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import UserInfo from 'src/components/UserInfo'

const LogoutContainer = Styled.div`
    color: var(--textNormal);
    cursor: pointer;
`

export default function Profile ({ user, logout }) {

    return (
        <>
            <UserInfo
                user={user}
            />
            <LogoutContainer onClick={logout}>
                <LogOut/>
            </LogoutContainer>
        </>
    )
}

Profile.displayName = 'Profile'
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}
