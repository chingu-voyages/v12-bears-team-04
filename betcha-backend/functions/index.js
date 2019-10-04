const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp();
const express = require('express');
const app = express();

app.get('/dataSet', (req, res) => {
    admin
    .firestore()
    .collection('dataSet')
    .get()
    .then(data => {
        let dataSet = [];
        data.forEach(doc => {
            dataSet.push(doc.data())
        })
        return res.json(dataSet);
    })
    .catch(err => console.error(err));
})


app.post('/dataSet', (req, res) => {

const newdataSet = {
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    createdAt: admin.firestore.Timestamp.fromDate(new Date())
};

  admin
 .firestore()
 .collection('dataSet')
 .add(newdataSet)
 .then((doc) => {
     res.json({ message: `document ${doc.id} created successfully` });
     console.log("created user successfully");
     return null;
 })
 .catch((err) => {
     res.status(500).json({ error: 'something went wrong'});
     console.error(err);
 });
});

exports.api = functions.https.onRequest(app);