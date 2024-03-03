// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBfmk2I7941xlkztEWiAZaNQbPRqoyAb1E",
        authDomain: "taxbot-e7310.firebaseapp.com",
        projectId: "taxbot-e7310",
        storageBucket: "taxbot-e7310.appspot.com",
        messagingSenderId: "863664754904",
        appId: "1:863664754904:web:c99bf37e9f63ec5aa2c7ad",
        measurementId: "G-PRG475NS4S"
    };

    // Initialize Firebase
    return initializeApp(firebaseConfig)
}
