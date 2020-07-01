import React from 'react'
import GoogleButton from 'react-google-button'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'

import userDS from 'src/datasources/user.js'

export default function Login ({ updateUser }) {
    const dispatch = useDispatch()

    const toggleIsLoading = () => dispatch({ type: 'TOGGLE_ISLOADING' })

    const googleSignIn = async e => {
        e.preventDefault()
        try {
            toggleIsLoading()
            const user = await userDS.login()
            updateUser(user)
            toggleIsLoading()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <GoogleButton
            onClick={googleSignIn}>
            Sign In
        </GoogleButton>
    )
}

Login.displayName = 'Login'
Login.propTypes = {
    updateUser: PropTypes.func.isRequired,
}
