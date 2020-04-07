import firebase from "firebase/app"

export const getWholeCollection = async (collectionName) => {
  let result = []
  const db = firebase.firestore()
  await db.collection(collectionName).get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      result.push(doc.data())
    })
  })
  return result
}

export const getSingleDocument = async (collectionName, id) => {
  let result = []
  const db = firebase.firestore()
  await db.collection(collectionName).where("userId", "==", id).get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      result.push(doc.data())
    })
  })
  return result[0] // applicant is always a singleton
}