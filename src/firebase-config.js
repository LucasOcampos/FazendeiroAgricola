import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBehwZD3fRAu9Ue_PgOYnGszhdbnlm6Y6Y",
    authDomain: "fazendeiroagricola.firebaseapp.com",
    projectId: "fazendeiroagricola",
    storageBucket: "fazendeiroagricola.appspot.com",
    messagingSenderId: "897633565160",
    appId: "1:897633565160:web:c597d5973ca9f5974acc5d",
    measurementId: "G-HH603761QD"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
auth.useDeviceLanguage();

export {firebase, auth};