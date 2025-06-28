import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoSubkWi8TQ37GkzFN_0iKJJEHcFhrTXU",
  authDomain: "it-elective-final-proj.firebaseapp.com",
  projectId: "it-elective-final-proj",
  storageBucket: "it-elective-final-proj.appspot.com",
  messagingSenderId: "770958723065",
  appId: "1:770958723065:web:a96f9172612077a7c91f28"
};

const app = initializeApp(firebaseConfig);

window.login = function () {
  alert("Login clicked!");
};

window.register = function () {
  alert("Register clicked!");
};