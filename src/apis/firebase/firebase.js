import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFTQN8i9rsNr5MYOUzCq89sz0FVTeVj6I",
  authDomain: "makemyhome-69d86.firebaseapp.com",
  projectId: "makemyhome-69d86",
  storageBucket: "makemyhome-69d86.appspot.com",
  messagingSenderId: "452393358095",
  appId: "1:452393358095:web:b204b5adfc0d670556647a",
};

//initialize firebase instance
let firebase = initializeApp(firebaseConfig);
export let auth = getAuth(firebase);
export let database = getDatabase(firebase);
export let storage = getStorage(firebase);
