import * as firebase from "firebase"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const firebaseConfig = {
    apiKey: "AIzaSyDYmC22XvqVRsohMAMRsyQbHddxuKAez0w",
    authDomain: "formcreator-835c5.firebaseapp.com",
    databaseURL: "https://formcreator-835c5.firebaseio.com",
    projectId: "formcreator-835c5",
    storageBucket: "formcreator-835c5.appspot.com",
    messagingSenderId: "736628675278",
    appId: "1:736628675278:web:3c0dae143aba5200ae369f",
    measurementId: "G-W2R6GNMR13"
  };

  const uiConfig = {
    signInFlow : "popup",
    signInSuccessUrl: '/',
    signInOptions : [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID ,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
  }


  const fire = firebase.initializeApp(firebaseConfig)

export  {fire , uiConfig }