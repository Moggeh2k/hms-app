import firebase from 'firebase/app'
import "firebase/functions";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";


  var Fire = firebase.initializeApp({
    apiKey: "AIzaSyCpnK1uNBUoBsS79G5RM4NlDUvN-8FHwnE",
    authDomain: "login-hms.firebaseapp.com",
    databaseURL: "https://login-hms.firebaseio.com",
    projectId: "login-hms",
    storageBucket: "login-hms.appspot.com",
    messagingSenderId: "200787650027",
    appId: "1:200787650027:web:1dffefd4b15491f5be65ae"
    
  });

 

  export default Fire;


 
 export const db = Fire.firestore();
 export const storage = Fire.storage();