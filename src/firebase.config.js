import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjnj4VNAvFef-5VwRMuZ-qyC0RQxKSXg",
  authDomain: "house-marketplace-app-fadb7.firebaseapp.com",
  projectId: "house-marketplace-app-fadb7",
  storageBucket: "house-marketplace-app-fadb7.appspot.com",
  messagingSenderId: "437494930717",
  appId: "1:437494930717:web:5375fecc239414518295f4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()