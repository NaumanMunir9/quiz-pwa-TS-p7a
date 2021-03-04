importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyA8M_WvMjbH5CEbcgXmia1D3HA4Uo5PMDc",
  authDomain: "quiz-app-pwa-react-ts.firebaseapp.com",
  projectId: "quiz-app-pwa-react-ts",
  storageBucket: "quiz-app-pwa-react-ts.appspot.com",
  messagingSenderId: "522327134552",
  appId: "1:522327134552:web:55aa1785d808fc8f68152d",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
