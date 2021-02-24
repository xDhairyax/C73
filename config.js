import firebase from 'firebase'
//require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCyub43SwZxGfd0gdpM3v4Hxufvi-KO9qc",
  authDomain: "library-2dfa3.firebaseapp.com",
  projectId: "library-2dfa3",
  storageBucket: "library-2dfa3.appspot.com",
  messagingSenderId: "408957737857",
  appId: "1:408957737857:web:b329a4e189847f78c4a680"
};
  // Initialize Firebase
  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}


  export default firebase.firestore();
