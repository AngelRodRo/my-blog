import React from "react"
import firebase from "gatsby-plugin-firebase"

import Tip from "@components/Tip"
import Profile from '@components/Profile'
import Layout from "@components/Layout/tips"

import Login from "@components/Login"
import tipDS from "@datasources/tips"

export default () => {

    const [tips, setTips] = React.useState([])
    const [currentUser, setCurrentUser] = React.useState(firebase.auth().currentUser)

    React.useEffect(() => {
        tipDS.list().then(setTips);
    }, [])

    const TipsList = () => tips.map(tip =>
        <Tip
            tip={tip}
            key={tip.id}
        />
    )

    firebase.auth().onAuthStateChanged(setCurrentUser);

    return (
        <Layout>
            {
                !currentUser?
                    <Login /> :
                    <Profile
                        user={currentUser}
                    />
            }
            <TipsList />
        </Layout>
    )
}
