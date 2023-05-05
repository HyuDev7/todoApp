import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "./config/firebaseConfig";

const auth = getAuth(app);

export default auth;

export async function signUpWithPassword(email, password, navigateCallback) {
  console.log(auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigateCallback("/succeedsignup");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode);
      console.error(errorMessage);
      navigateCallback("/signup");
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
      navigateCallback("/signin")
    });
}
