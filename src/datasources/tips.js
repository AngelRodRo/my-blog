import firebase from "gatsby-plugin-firebase"

export default {
    create() {
        const db = firebase.firestore();
        db.collection("tips").add({
            title: "Ada",
            description: "Lovelace",
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}
