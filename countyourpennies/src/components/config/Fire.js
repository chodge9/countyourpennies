import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkvS7641tWKNV2aZoSiODQRowQBwQTgD4",
  authDomain: "countyourpennies-1f492.firebaseapp.com",
  projectId: "countyourpennies-1f492",
  storageBucket: "countyourpennies-1f492.appspot.com",
  messagingSenderId: "714089579192",
  appId: "1:714089579192:web:ac432064cc2e87d8ca6a4d",
  measurementId: "G-YFFFP6SDPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;