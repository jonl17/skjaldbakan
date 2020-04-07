import firebase from "firebase/app"

export const getWholeCollection = async (collectionName) => {
  let result = []
  let isLoading = true
  const db = firebase.firestore()
  await db.collection(collectionName).get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      result.push(doc.data())
    })
    isLoading = false
  })
  return result
}