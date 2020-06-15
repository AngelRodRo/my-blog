import collection from './index';

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

export default {
    async list () {
        const tips = []
        const tipsSnapshot = convertToArray(await collection("tips").get())
        for (const tipDoc of tipsSnapshot) {
            const userSnapshot = convertToArray(await tipDoc.ref.collection('user').get());
            for (const userDoc of userSnapshot) {
                tips.push({
                    ...tipDoc,
                    user: userDoc,
                })
            }
        }
        return tips
    },
    async create({ title, description, code, language = "", tags = [], userId = "" }) {
        const tipRef = await collection("tips").add({
            title,
            description,
            code,
            language,
            tags,
        })
        console.log("Document written with ID: ", tipRef.id)
    }
}
