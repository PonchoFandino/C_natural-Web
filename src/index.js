import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
    apiKey: "AIzaSyDT2r1br3KvCQBs7UAN2KcGyrgQ04j4wFM",
    authDomain: "storenatural-2d183.firebaseapp.com",
    databaseURL: "https://storenatural-2d183.firebaseio.com",
    projectId: "storenatural-2d183",
    storageBucket: "storenatural-2d183.appspot.com",
    messagingSenderId: "833922926311"
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
