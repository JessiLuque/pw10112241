import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//comienza firebase---------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClqyQaayDroLrDvder_IJkvSUzHbTTflo",
  authDomain: "programacion-web-2d88b.firebaseapp.com",
  projectId: "programacion-web-2d88b",
  storageBucket: "programacion-web-2d88b.appspot.com",
  messagingSenderId: "597331434561",
  appId: "1:597331434561:web:f9c58d6e8d589808557ac0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

//termina firebase------------------------------------------

const app = createApp(App)

app.use(router)

app.mount('#app')
