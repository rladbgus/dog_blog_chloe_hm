importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

firebase.initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'dog-blog-29d8f.firebaseapp.com',
  databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com',
  projectId: 'dog-blog-29d8f',
  storageBucket: 'dog-blog-29d8f.appspot.com',
  messagingSenderId: '919821521993',
  appId: '1:919821521993:web:ff0855fbea794365409b98',
  measurementId: 'G-NY64PXGRL7'
});

const messaging = firebase.messaging();
