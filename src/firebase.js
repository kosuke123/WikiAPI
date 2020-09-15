import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDupIGbC9lc0cF0FolycCiHmlFx0DuXo9A",
  authDomain: "mlbteam-dc1f0.firebaseapp.com",
  databaseURL: "https://mlbteam-dc1f0.firebaseio.com",
  projectId: "mlbteam-dc1f0",
  storageBucket: "mlbteam-dc1f0.appspot.com",
  messagingSenderId: "940541777782",
  appId: "1:940541777782:web:3ba368d30b38963e214c57",
  measurementId: "G-NM77GC2QQN"
};

const app = firebase.initializeApp(firebaseConfig);

export default app.firestore();
