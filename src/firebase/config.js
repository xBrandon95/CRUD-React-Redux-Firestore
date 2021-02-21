import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5jhemEh-UAe373eeoKd8LMnf2tnktzPo',
  authDomain: 'crud-products-redux.firebaseapp.com',
  projectId: 'crud-products-redux',
  storageBucket: 'crud-products-redux.appspot.com',
  messagingSenderId: '932130039583',
  appId: '1:932130039583:web:d70f37754c50f7ab5b322a',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
