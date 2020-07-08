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

const TIPS_LIMIT = 10

export default {
    async list ({
        limit = TIPS_LIMIT,
        offset: lastItem,
        filters = {
            languages: []
        }
    } = {}) {
        const tips = []
        let tipsQuery = firestore.collection('tips')
        console.log(filters)
        if (filters.languages.length > 0) {
            tipsQuery = tipsQuery
                            .where('language', 'in', filters.languages)
        }

        tipsQuery = tipsQuery.orderBy('created', 'desc')
                        .limit(limit)

        if (lastItem) {
            tipsQuery = tipsQuery
                        .startAfter(lastItem)
        }

        const tipSnapshots = await tipsQuery.get()
        const tipDocs = convertToArray(tipSnapshots)
        for (const tipDoc of tipDocs) {
            const userDoc = (await firestore.collection('users').doc(tipDoc.uid).get()).data()
            tips.push({
                ...tipDoc,
                user: userDoc,
            })
        }
        return {
            tips,
            lastTipSnapshot: tipSnapshots.docs[tipSnapshots.docs.length - 1]
        }
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
