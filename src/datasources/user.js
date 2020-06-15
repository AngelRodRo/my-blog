import collection from './index';

export default {
    create() {
        const userRef = await collection("tips").add({
            title,
            description,
            code,
            language,
            tags,
        })
        console.log("Document written with ID: ", userRef.id)
    },
}
