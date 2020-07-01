import React from 'react'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { toast } from 'react-toastify'

import { setUser, getUser, isLoggedIn, logout } from 'src/utils/auth'

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
const FloatButton = Styled.div`
    position: absolute;
    width: 50px;
    height: 50px !important;
    border-radius: 50%;
    background: white;
    right: 0;
    bottom: 0;
    cursor: pointer;

    margin: 20px;

    &:before{
        content: '+';
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: center;
    }
`

const Index = ({ toggleIsLoading }) => {

    const [tips, setTips] = React.useState([])
    const [localUser, setLocalUser] = React.useState(getUser())
    const [isLogged, setIsLogged] = React.useState(isLoggedIn())

    userDS.inspect(user => {
        if (user) {
            setIsLogged(true)
        }
    })

    React.useEffect(() => {
        const fetchTips = async () => {
            toggleIsLoading()
            try {
                const tips = await tipDS.list()
                setTips(tips)
            } catch (e) {
                toast.error('Error al recuperar los tips, intentelo de nuevo mas tarde')
            }
            toggleIsLoading()
        }
        fetchTips()
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

    const doLogout = async () => {
        toggleIsLoading()
        setIsLogged(false)
        setUser({})
        await logout()
        toggleIsLoading()
    }

    return (
        <>
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
            {isLogged? <FloatButton onClick={() => navigate('/tips/create')} /> : null}
        </>
    )
}

Index.displayName = 'TipIndex'
Index.propTypes = {
    toggleIsLoading: PropTypes.func,
}

const mapDispatchToProps = dispatch => {
    return {
        toggleIsLoading: () => dispatch({ type: 'TOGGLE_ISLOADING' }),
    }
}

export default connect(null, mapDispatchToProps)(Index)
