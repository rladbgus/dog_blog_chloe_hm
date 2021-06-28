const express = require('express');
const next = require('next');
var admin = require('firebase-admin');

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

// prodution모드로 서버 실핼: sudo NODE_ENV=production nodemon server/index.js

// Firebase Admin SDK
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com'
});

app.prepare().then(() => {
  const server = express();

  server.post('/notice', (req, res) => {
    const registrationToken =
      'dxLBq8v6nJ01SdrpcqOsoz:APA91bHIYeM7ealSl9ecJd7aWX-AMIoZHt4pTXI-xI_ULCj82qFTSd7U3NA9D_NXXhNnAHFcxTd3yAl0kBReZWz7TNr-NsCuHDiC9iGoUDEioCswC7YZs4DmmB7Yks_7TyWN_-ioYnE0';

    const messages = [
      {
        notification: {
          title: '업로드 완료',
          body: '파일 업로드가 완료되었습니다.'
        },
        token: registrationToken
      }
    ];

    admin
      .messaging()
      .sendAll(messages)
      .then((res) => {
        console.log(res.successCount + ' messages were sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`listening to ${port}`);
  });
});
