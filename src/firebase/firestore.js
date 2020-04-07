import firebase from "firebase/app"

export const getWholeCollection = async (collectionName) => {
  let result = []
  const db = firebase.firestore()
  await db.collection(collectionName).get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data()
      })
    })
  })
  return result
}

export const getSingleApplicant = async (userId) => {
  let result = []
  const db = firebase.firestore()
  await db.collection("applicants").where("userId", "==", userId).get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
      result.push({
        id: doc.id,
        ...doc.data()
      })
    })
  })
  return result[0] // applicant is always a singleton
}

export const getSingleMovie = async (id) => {
  let result
  const db = firebase.firestore()
  await db.collection("movies").doc(id).get().then(doc => {
    result = {
      id: doc.id,
      ...doc.data()
    }
  })
  return result
}