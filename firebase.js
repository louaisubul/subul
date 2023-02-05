const firebaseConfig = {
    apiKey: "AIzaSyD6BSW90I5vG-2lh0RE3Ukc5Gcv1n9ONZY",
    authDomain: "to-do--list-2.firebaseapp.com",
    projectId: "to-do--list-2",
    storageBucket: "to-do--list-2.appspot.com",
    messagingSenderId: "454576050872",
    appId: "1:454576050872:web:5bcd4876b142c0f6435a4d",
    measurementId: "G-KRCQSLRBZ6"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();