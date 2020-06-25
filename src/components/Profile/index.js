import React from 'react'
import { LogOut } from 'react-feather'
import PropTypes from 'prop-types'

import UserInfo from 'src/components/UserInfo'

export default function Profile ({ user, logout }) {

    return (
        <div>
            <UserInfo
                user={user}
            />
            <button onClick={logout}><LogOut /></button>
        </div>
    )
}

Profile.displayName = "Profile"
Profile.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}
