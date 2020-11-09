import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyCpnK1uNBUoBsS79G5RM4NlDUvN-8FHwnE",
    authDomain: "login-hms.firebaseapp.com",
    databaseURL: "https://login-hms.firebaseio.com",
    projectId: "login-hms",
    storageBucket: "login-hms.appspot.com",
    messagingSenderId: "200787650027",
    appId: "1:200787650027:web:1dffefd4b15491f5be65ae"
  };

  const Fire = firebase.initializeApp(firebaseConfig);

  export default Fire;
