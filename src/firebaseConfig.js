import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import process from "process";
import * as dotenv from 'dotenv'
dotenv.config();
// sdk
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: "practicing-firebase-firestore",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.envAPP_ID
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);