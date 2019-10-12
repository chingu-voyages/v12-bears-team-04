const functions = require('firebase-functions');

const app = require('express')();
const FBAuth = require('./util/fbAuth')
const { getAllDataSet, postOneDataSet } = require('./handlers/dataSet');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');

//Dataset routes(dataSet.js)
app.get('/dataSet', getAllDataSet );
app.post('/dataSets',FBAuth, postOneDataSet);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
//user routes(users.js)
app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.region("europe-west1").https.onRequest(app);