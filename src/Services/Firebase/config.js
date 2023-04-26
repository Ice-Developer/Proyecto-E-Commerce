import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIki4KfWPOdmISOiMcfvXdMm7eak2_vsw",
    authDomain: "proyectocoderhouse-bcc45.firebaseapp.com",
    projectId: "proyectocoderhouse-bcc45",
    storageBucket: "proyectocoderhouse-bcc45.appspot.com",
    messagingSenderId: "888682907387",
    appId: "1:888682907387:web:a84f5f6a08637d5de0d25e"
};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
