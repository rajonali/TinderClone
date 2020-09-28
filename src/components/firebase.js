import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDZXfj3-84WgzcMYZ6UbOVdKcOXBoBCZhw",
    authDomain: "tinder-clone-cd290.firebaseapp.com",
    databaseURL: "https://tinder-clone-cd290.firebaseio.com",
    projectId: "tinder-clone-cd290",
    storageBucket: "tinder-clone-cd290.appspot.com",
    messagingSenderId: "722509119722",
    appId: "1:722509119722:web:bb7548e07764c00cdcd793",
    measurementId: "G-F2Z37MD7LR"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;