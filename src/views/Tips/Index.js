import React from 'react'

import { setUser, getUser, isLoggedIn, logout } from 'src/utils/auth'

import FloatButton from 'src/components/base/FloatButton'

import Tip from 'src/components/Tip'
import Profile from 'src/components/Profile'
import Login from 'src/components/Login'

import userDS from 'src/datasources/user'
import tipDS from 'src/datasources/tips'

export default function Index() {

    const [tips, setTips] = React.useState([])
    const [localUser, setLocalUser] = React.useState(getUser())
    const [isLogged, setIsLogged] = React.useState(isLoggedIn())

    userDS.inspect(user => {
        if (user) {
            setIsLogged(true)
        }
    })

    React.useEffect(() => {
        tipDS.list().then(setTips)
    }, [])

    const TipsList = () => tips.map(tip =>
        <Tip
            tip={tip}
            key={tip.id}
        />
    )

    const updateUser = (user) => {
        setUser(user)
        setLocalUser(user)
    }

    const doLogout = () => {
        setIsLogged(false)
        setUser({})
        logout()
    }

    return (
        <>
            {
                !isLogged?
                    <Login
                        updateUser={updateUser}
                    /> :
                    <Profile
                        user={localUser}
                        logout={doLogout}
                    />
            }
            <TipsList />
            <FloatButton />
        </>
    )
}

Index.displayName = 'TipIndex'

