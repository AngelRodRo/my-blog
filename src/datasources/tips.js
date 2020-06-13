import collection from './index';

export default {
    async list () {
        const tips = await collection("tips").get().then(querySnapshot => {
            let docs = []
            querySnapshot.forEach(function(doc) {
                docs.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            return docs;
        })
        
        return tips
    },
    async create({ title, description, code, language, tags }) {
        const docRef = await collection("tips").add({
            title,
            description,
            code,
            language,
            tags,
        })
        console.log("Document written with ID: ", docRef.id)
    }
}
