const admin = require('firebase-admin')


const serviceAccount = {
    
  }


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://betcha-challenge.firebaseio.com"
  });

  const db = admin.firestore();

  module.exports = { admin, db };
