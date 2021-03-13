import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyA1cMO8k-g7VzQZJMqe6LR_Q76CePBjP5k",
    authDomain: "motivation-hub-8edd4.firebaseapp.com",
    projectId: "motivation-hub-8edd4",
    storageBucket: "motivation-hub-8edd4.appspot.com",
    messagingSenderId: "993766449673",
    appId: "1:993766449673:web:20a1f8762196775e2c4ed8",
    measurementId: "G-PZ973VCENP"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  }
export default firebase.firestore()