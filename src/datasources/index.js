import firebase from "gatsby-plugin-firebase"

export default function (collectionName) {
  const db = firebase.firestore()
  return db.collection(collectionName)
};
