// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCrQca_JVDmtTJYf98XHkPIKrC1h35e_pg",
    authDomain: "fir-cbf3f.firebaseapp.com",
    projectId: "fir-cbf3f",
    storageBucket: "fir-cbf3f.appspot.com",
    messagingSenderId: "312346069848",
    appId: "1:312346069848:web:15489f5b69f0c93961332d",
    measurementId: "G-R5EZVT6WVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
