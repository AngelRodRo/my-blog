import React from 'react'
import UserInfo from '@components/UserInfo'
import { LogOut } from 'react-feather'

import userDS from '@datasources/user.js';

export default ({ user }) => {

    const logout = () => {
        userDS.logout();
    }

    return (
        <div>
            <UserInfo
                user={user}
            />
            <button onClick={logout}><LogOut /></button>
        </div>
    )
}
