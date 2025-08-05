/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCnfecVmASw4yU9cQJ18C8oC0m4V0K69q4",
	authDomain: "milestone12-caffee28thjuly2025.firebaseapp.com",
	projectId: "milestone12-caffee28thjuly2025",
	storageBucket: "milestone12-caffee28thjuly2025.firebasestorage.app",
	messagingSenderId: "816532268967",
	appId: "1:816532268967:web:853774fc227d39b325f882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
