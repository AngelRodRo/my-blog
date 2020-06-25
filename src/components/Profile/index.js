import React from 'react'
import { LogOut } from 'react-feather'
import PropTypes from 'prop-types'

import UserInfo from 'src/components/UserInfo'

export default function Profile ({ user, logout }) {

    return (
        <>
            <UserInfo
                user={user}
            />
            <button onClick={logout}><LogOut /></button>
        </>
    )
}

Profile.displayName = 'Profile'
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}
