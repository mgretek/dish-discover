import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth } from "../../../config/firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignOut = () => {
  return auth.signOut();
};

/* export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};
export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
}; */
