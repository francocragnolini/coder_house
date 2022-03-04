// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEPMxRKCfC5h7tM_Njg-1EQ7AkYL9ISXY",
  authDomain: "coderhouse-react-6fb70.firebaseapp.com",
  projectId: "coderhouse-react-6fb70",
  storageBucket: "coderhouse-react-6fb70.appspot.com",
  messagingSenderId: "1052894519128",
  appId: "1:1052894519128:web:2a740ed3f8a7bfd55ccf2d",
};
// const {
//   REACT_APP_API_KEY,
//   REACT_APP_AUTH_DOMAIN,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_MESSAGING_SENDER_ID,
//   REACT_APP_ID,
// } = process.env.NODE_ENV;

// const firebaseConfig = {
//   apiKey: REACT_APP_API_KEY,
//   authDomain: REACT_APP_AUTH_DOMAIN,
//   projectId: REACT_APP_PROJECT_ID,
//   storageBucket: REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
//   appId: REACT_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
