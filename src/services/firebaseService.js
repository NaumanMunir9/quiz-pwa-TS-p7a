import firebase from "firebase/app";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA8M_WvMjbH5CEbcgXmia1D3HA4Uo5PMDc",
  authDomain: "quiz-app-pwa-react-ts.firebaseapp.com",
  projectId: "quiz-app-pwa-react-ts",
  storageBucket: "quiz-app-pwa-react-ts.appspot.com",
  messagingSenderId: "522327134552",
  appId: "1:522327134552:web:55aa1785d808fc8f68152d",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export const initNotification = () => {
  Notification.requestPermission().then((permission) => {
    console.log(permission);

    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("Token: ", currentToken);
          } else {
            // Show permission request.
            console.log(
              "No registration token available. Request permission to generate one."
            );
          }
        })
        .catch((error) => {
          console.log("An error occurred while retrieving token. ", error);
        });
    }
  });
};
