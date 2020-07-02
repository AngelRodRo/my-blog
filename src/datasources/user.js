import firebase from 'gatsby-plugin-firebase'

const firestore = firebase.firestore()

const getUserDetails = (user) => {
    const {profile} = user.additionalUserInfo
    const details = {
        firstName: profile.given_name,
        lastName: profile.family_name,
        fullName: profile.name,
        email: profile.email,
        picture: profile.picture,
    }
    return details
}

export default {
    async login() {
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await firebase.auth().signInWithPopup(provider)
        const {uid} = firebase.auth().currentUser
        const docRef = firestore.collection('users').doc(uid)
        const doc = await docRef.get()
        return {
            uid,
            ...(doc.exists? getUserDetails(user) : this.create(user))
        }
    },
    inspect(cb) {
        firebase.auth().onAuthStateChanged(cb)
    },
    logout() {
        return firebase.auth().signOut()
    },
    create(user) {
        const details = getUserDetails(user)
        firestore.collection('users').doc(firebase.auth().currentUser.uid).set(details)
        return details
    },
}
