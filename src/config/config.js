import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCA0BZnoRUim2m6gO1F3C2699SE2bbAsB4",
  authDomain: "admin-panelim.firebaseapp.com",
  databaseURL: "https://admin-panelim.firebaseio.com",
  projectId: "admin-panelim",
  storageBucket: "admin-panelim.appspot.com",
  messagingSenderId: "379605131894",
  appId: "1:379605131894:web:9db757e58e23a16c357557"
};

class Fire {
  constructor() {
      firebase.initializeApp(firebaseConfig)
      this.auth = firebase.auth()
      this.db = firebase.firestore()
      this.storage = firebase.storage()
      this.FieldValue = firebase.firestore.FieldValue
  }


}


export default new Fire()