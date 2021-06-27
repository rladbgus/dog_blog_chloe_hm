const express = require('express');
const next = require('next');
var admin = require('firebase-admin');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://dog-blog-29d8f-default-rtdb.firebaseio.com'
});

app.prepare().then(() => {
  const server = express();

  server.post('/notice', (req, res) => {
    const registrationToken =
      'dxLBq8v6nJ01SdrpcqOsoz:APA91bH4CVYdw6-B1_xdY2WJtbcs-PE5RXfheF62rb_fhkD_PcHyAfxWEtOGyPxQHxf2WCuBMwdE5EHk6H6SG4dMJwc29rke-rK9cDvO6LI1Ppnpu_cJDkoC_PYRyIHCf7qt-_R7oU0a';

    const messages = [];
    messages.push({
      notification: {
        title: '업로드 완료',
        body: '파일 업로드가 완료되었습니다.'
      },
      token: registrationToken
    });
    admin
      .messaging()
      .sendAll(messages)
      .then((response) => {
        console.log(response.successCount + ' messages were sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });

    // Send a message to the device corresponding to the provided
    // registration token.
    // admin
    //   .messaging()
    //   .send(message)
    //   .then((response) => {
    //     console.log('Successfully sent message:', response);
    //   })
    //   .catch((error) => {
    //     console.error('Error sending message:', error);
    //   });
  });

  server.get('/', (req, res) => {
    return app.render(req, res, '/');
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('listening to 3000');
  });
});
