const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://betcha-challenge.firebaseio.com"
  });

  const db = admin.firestore();

  module.exports = { admin, db };