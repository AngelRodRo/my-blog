import React from "react"
import GoogleButton from "react-google-button"

import userDS from "@datasources/user.js"

export default () => {
    const googleSignIn = async e => {
        e.preventDefault()
        try {
            await userDS.login()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <GoogleButton onClick={googleSignIn}>Sign In</GoogleButton>
        </>
    );
}
