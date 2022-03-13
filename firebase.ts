import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD_O25-s4GqLpmZTVmMTSj_b4q3YdErZzs",
    authDomain: "facebookclone-fa903.firebaseapp.com",
    projectId: "facebookclone-fa903",
    storageBucket: "facebookclone-fa903.appspot.com",
    messagingSenderId: "906834560911",
    appId: "1:906834560911:web:b0f9c1ecbc22e8ee1c2dfa"
  };

  const app =  initializeApp(firebaseConfig);
  var db = getFirestore(app);
  const storage = getStorage(app);

  export {db,storage};