import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJExqpQHCG9lU9qj3S3IYWwid0bTviXB4",
  authDomain: "temperature-checker-2.firebaseapp.com",
  databaseURL: "https://temperature-checker-2-default-rtdb.firebaseio.com",
  projectId: "temperature-checker-2",
  storageBucket: "temperature-checker-2.appspot.com",
  messagingSenderId: "1070998063293",
  appId: "1:1070998063293:web:3203a0f5259de7b7280fd4",
  measurementId: "G-F0JBW50PQ3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

let lo = document.getElementById("lo");

lo.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user.email);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
