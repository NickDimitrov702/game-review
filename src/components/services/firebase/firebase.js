import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore";  



// Creating variable for initializing firebase
// this is also a good example for const how it should be used.
// TO DO: create later evn

const app = firebase.initializeApp({
    apiKey: "AIzaSyBMBJYwYgABWGA1DlFDgVQxBz0UXKZtTtA",
    authDomain: "react-api-game-reviews.firebaseapp.com",
    projectId: "react-api-game-reviews",
    storageBucket: "react-api-game-reviews.appspot.com",
    messagingSenderId: "380055573380",
    appId: "1:380055573380:web:38c4ce3e30ae11f825c3d1"
})

export const auth = app.auth()
export default app
export const db = getFirestore();