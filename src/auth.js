import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import app from "./config/firebaseConfig";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export default auth;

export function checkAuth(navigateCallback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      console.log("is your user id!");
      navigateCallback(`/${uid}/todo`);
    } else {
      // User is signed out
      console.log("you're not sign in yet...");
      navigateCallback("/signin");
    }
  });
}

export async function signUpWithPassword(email, password) {
  // console.log(auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
    });
  //   console.log(result);
}

export function signInWithPassword(email, password, navigateCallback) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigateCallback("/todo");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      navigateCallback("/signin");
    });
}

export function signInWithGoogleAccountRedirecting() {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(user);
      console.log("is your id!");
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
}

export function signInWithGoogleAccount() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log("success to logging in with google account");
      // console.log(credential);
      // console.log(result);
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
      console.error(errorCode);
      console.error(errorMessage);
      console.error(email);
      console.error(credential);
    });
}

export function userSignOut() {
  signOut(auth)
    .then(() => {
      console.log(`you got sign out!`);
      // console.log(user)
      // Sign-out successful.
      // window.alert(`you got signout! from ${user.uid}`);
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
}
