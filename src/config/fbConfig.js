import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCApXQoOyzTjz6fho3lhVF5BFOv_sv0gx0",
  authDomain: "essalud-715d1.firebaseapp.com",
  databaseURL: "https://essalud-715d1.firebaseio.com",
  projectId: "essalud-715d1",
  storageBucket: "essalud-715d1.appspot.com",
  messagingSenderId: "162700235805",
  appId: "1:162700235805:web:2cda486b3f858952cde2f4",
  measurementId: "G-244FCKECPH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;
