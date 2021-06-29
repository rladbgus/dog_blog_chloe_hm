const express = require('express');
const next = require('next');
var admin = require('firebase-admin');

const dev = process.env.NODE_ENV !== 'production';
const port = 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

// Firebase Admin SDK
var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com'
});

app.prepare().then(() => {
  const server = express();
  const router = express.Router;

  // 알람 기능
  server.post('/notice', (req, res) => {
    const registrationToken =
      'eFbHEFEcs2Z4TOX52Dm8a:APA91bHxQ2WlBw_ChYL0EM1gzgrV1KJjcwcJEshW8PPuV4bAdm2S8if1szhukAMMqgKYAr6R4EVEqMIpN3KfKv4_NhUjeagy_xkM-lcNZo3H0UxHTO6aWi7Byu5XSDcRRow1E3tXtSRe';

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

  const user = [
    { id: 1, name: 'van' },
    { id: 2, name: 'tony' },
    { id: 3, name: 'jinny' },
    { id: 4, name: 'kevin' },
    { id: 5, name: 'chloe' }
  ];

  // 서비스 소개화면 데이터
  server.get('/introduction', (req, res) => {
    return res.json(user);
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
