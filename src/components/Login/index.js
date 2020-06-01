import React from 'react'
import firebase from "gatsby-plugin-firebase"

export default () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = async e => {
        e.preventDefault();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    };


    return (
        <>
            <button onClick={googleSignIn}>Sign In</button>
        </>
    );
}