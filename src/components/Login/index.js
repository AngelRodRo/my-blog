import React from 'react'
import GoogleButton from 'react-google-button'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

import { useDispatch } from 'react-redux'

import userDS from 'src/datasources/user.js'

export default function Login ({ updateUser }) {
    const dispatch = useDispatch()

    const toggleIsLoading = () => dispatch({ type: 'TOGGLE_ISLOADING' })

    const googleSignIn = async e => {
        e.preventDefault()
        toggleIsLoading()
        try {
            const user = await userDS.login()
            console.log(user)
            updateUser(user)
            toast.success('Inicio de sesión exitoso !!')
        } catch (e) {
            toast.error('Error en el inicio de sesión, intentelo de nuevo')
            console.log(e)
        }
        toggleIsLoading()
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
