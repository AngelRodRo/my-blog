import React from "react"
import GoogleButton from "react-google-button"
import PropTypes from "prop-types"

import userDS from "src/datasources/user.js"

export default function Login ({ updateUser }) {
    const googleSignIn = async e => {
        e.preventDefault()
        try {
            const user = await userDS.login()
            updateUser(user)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <GoogleButton
            onClick={googleSignIn}>
            Sign In
        </GoogleButton>
    );
}

Login.displayName = "Login"
Login.propTypes = {
    updateUser: PropTypes.func.isRequired,
}
