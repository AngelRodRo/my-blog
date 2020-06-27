import React from 'react'
import Styled from 'styled-components'

import { setUser, getUser, isLoggedIn, logout } from 'src/utils/auth'

import FloatButton from 'src/components/base/FloatButton'
import Loader from 'src/components/base/Loader'

import Tip from 'src/components/Tip'
import Profile from 'src/components/Profile'
import Login from 'src/components/Login'

import userDS from 'src/datasources/user'
import tipDS from 'src/datasources/tips'

const InfoContainer = Styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`

export default function Index() {

    const [tips, setTips] = React.useState([])
    const [localUser, setLocalUser] = React.useState(getUser())
    const [isLogged, setIsLogged] = React.useState(isLoggedIn())
    const [isLoading, setIsLoading] = React.useState(false)

    userDS.inspect(user => {
        if (user) {
            setIsLogged(true)
        }
    })

    React.useEffect(() => {
        tipDS.list().then(setTips)
        setIsLoading(false)
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
            <Loader />
            <InfoContainer>
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
            </InfoContainer>
            <TipsList />
            <FloatButton />
        </>
    )
}

Index.displayName = 'TipIndex'

