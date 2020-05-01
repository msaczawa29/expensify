import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBVJpUOlZd9Ttj3HrxZwNSn9F7BWN7JxZU',
  authDomain: 'expensify-6ca42.firebaseapp.com',
  databaseURL: 'https://expensify-6ca42.firebaseio.com',
  projectId: 'expensify-6ca42',
  storageBucket: 'expensify-6ca42.appspot.com',
  messagingSenderId: '558389667927',
  appId: '1:558389667927:web:5d835f72ee61b290665b12',
  measurementId: 'G-QDXHYKGYTV',
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
