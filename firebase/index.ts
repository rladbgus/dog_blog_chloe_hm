// import firebase from 'firebase/app';
// import 'firebase/messaging';
// import { useEffect } from 'react';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBY_9DQLLZWkBu07LRXhRc9j2Ox4Wvrx6o',
//   authDomain: 'dog-blog-29d8f.firebaseapp.com',
//   databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com',
//   projectId: 'dog-blog-29d8f',
//   storageBucket: 'dog-blog-29d8f.appspot.com',
//   messagingSenderId: '919821521993',
//   appId: '1:919821521993:web:ff0855fbea794365409b98',
//   measurementId: 'G-NY64PXGRL7'
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// useEffect(() => {
//   const messaging = firebase.messaging();

//   Notification.requestPermission()
//     .then(function () {
//       return messaging.getToken();
//     })
//     .then(function (token) {
//       console.log('token', token);
//     })
//     .catch(function (err) {
//       console.error('fcm error : ', err);
//     });
//   messaging.onMessage(function (payload) {
//     console.log('title:', payload.notification.title);
//     console.log('body:', payload.notification.body);
//   });
// });
