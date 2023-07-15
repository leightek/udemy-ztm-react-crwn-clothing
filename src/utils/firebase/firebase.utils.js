import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDSPodNFhhQfysKQBWJS32CzhwuQkDCQEs",
    authDomain: "crwn-clothing-db-3b108.firebaseapp.com",
    projectId: "crwn-clothing-db-3b108",
    storageBucket: "crwn-clothing-db-3b108.appspot.com",
    messagingSenderId: "718081917254",
    appId: "1:718081917254:web:92db10ddbb02ed6799a547"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
