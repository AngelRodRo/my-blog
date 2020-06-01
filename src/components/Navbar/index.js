import React from 'react'
import Login from '../Login'
import firebase from "gatsby-plugin-firebase"

export default () => {

    const currentUser = firebase.auth().currentUser;

    return (
        <div>
            {
                currentUser? <div>{currentUser.displayName}</div> : <Login />
            }
        </div>
    )
}