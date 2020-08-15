import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB-llp1Uk3Kxgx_wLNS0ebFizd08gMgIUs",
  authDomain: "vue-board-b2bc5.firebaseapp.com",
  databaseURL: "https://vue-board-b2bc5.firebaseio.com",
  projectId: "vue-board-b2bc5",
  storageBucket: "vue-board-b2bc5.appspot.com",
  messagingSenderId: "253057816383",
  appId: "1:253057816383:web:7cce280602e2d62911258a",
  measurementId: "G-VY8VHXHMCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbMessages = db.collection('messages');