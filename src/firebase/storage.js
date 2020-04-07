import firebase from "firebase/app"

export const getImageSrc = async (imageLocation) => {
  const storage = firebase.storage().ref(imageLocation)
  let imageUrl
  await storage.getDownloadURL().then((url) => imageUrl = url)
  return imageUrl
}