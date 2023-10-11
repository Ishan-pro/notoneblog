
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.APIKEY,
  authDomain: "thetranscendentalinstitute.firebaseapp.com",
  projectId: "thetranscendentalinstitute",
  storageBucket: "thetranscendentalinstitute.appspot.com",
  messagingSenderId: "735282505878",
  appId: "1:735282505878:web:bdaa205975a9068956fab7",
  measurementId: "G-3DDYWS4F19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);