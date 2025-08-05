// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyC3lwZpgm-8QLyJascbQq0sVBEuEQMTONA",
	authDomain: "newproject20thjuly2025.firebaseapp.com",
	projectId: "newproject20thjuly2025",
	storageBucket: "newproject20thjuly2025.firebasestorage.app",
	messagingSenderId: "365324749363",
	appId: "1:365324749363:web:2e40622b49a0543dc57146",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
