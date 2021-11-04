import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from 'firebase/compat';
import 'firebase/firestore';
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyA31ELwURDNDRU5NFyPGX7hsL6P_wx9jlo",
  authDomain: "task-4-330810.firebaseapp.com",
  projectId: "task-4-330810",
  storageBucket: "task-4-330810.appspot.com",
  messagingSenderId: "647449507260",
  appId: "1:647449507260:web:b360026df69fecb27267b9",
  measurementId: "G-HP2W4TS35F"
}
);

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
    firebase, auth, firestore
  }}>
  <App />
  </Context.Provider>,
  document.getElementById('root')
);

