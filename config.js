import firebase from "firebase/compat/app";
import {getDatabase} from "firebase/database"
const firebaseConfig = {
    apiKey: "AIzaSyDwba0usqRkGm8kYZ5jRLjiNjWR_fbFSQY",
    authDomain: "fir-b0fac.firebaseapp.com",
    projectId: "fir-b0fac",
    storageBucket: "fir-b0fac.appspot.com",
    messagingSenderId: "1075750119351",
    appId: "1:1075750119351:web:b10501657f4e36bacfea32",
    measurementId: "G-D2YBY52BTQ"
  };
if(firebase.apps.length==0){
    firebase.initializeApp(firebaseConfig);
}

const db =getDatabase();
export{db}