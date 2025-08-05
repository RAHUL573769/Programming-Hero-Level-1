// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCPFauyrR2t-vXZGpBmPMluRVcV1OvNUdU",
	authDomain: "fir-authentication-f29cd.firebaseapp.com",
	projectId: "fir-authentication-f29cd",
	storageBucket: "fir-authentication-f29cd.firebasestorage.app",
	messagingSenderId: "864022754313",
	appId: "1:864022754313:web:5a5d3094e38f4c0656f4d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
