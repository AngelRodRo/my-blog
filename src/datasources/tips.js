import firebase from 'gatsby-plugin-firebase'

const firestore = firebase.firestore()

const convertToArray = (snapshots) => {
    let docs = []
    snapshots.forEach((doc) => {
        docs.push({
            id: doc.id,
            ...doc.data(),
            ref: doc && doc.ref
        })
    })
    return docs
}

const TIPS_LIMIT = 5

export default {
    async list () {
        const tips = []
        const tipsQuery = await firestore.collection('tips')
                            .orderBy('created', 'desc')
                            .limit(TIPS_LIMIT)
                            .get()
        const tipsSnapshot = convertToArray(tipsQuery)
        for (const tipDoc of tipsSnapshot) {
            const userDoc = (await firestore.collection('users').doc(tipDoc.uid).get()).data()
            tips.push({
                ...tipDoc,
                user: userDoc,
            })
        }
        return tips
    },
    async create({ title, description, code, language = '', tags = [], uid, }) {
        await firestore.collection('tips').add({
            title,
            description,
            code,
            language,
            tags,
            uid,
            created: firebase.firestore.Timestamp.fromDate(new Date()),
        })
    }
}
