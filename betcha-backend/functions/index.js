const functions = require('firebase-functions');
const admin = require('firebase-admin')
const app = require('express')();

const serviceAccount = {
    "type": "service_account",
    "project_id": "betcha-challenge",
    "private_key_id": "886eeeb9ee9fd15f99daaec24a03f95ffdcb2638",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLY5k2fubP6ipp\nWL2eEyRBtuJIRA2ijSsBvddM04dTdI1wcSGT2lFmXJaZOvnbIP7TDtgfOrvFuRYD\n1spMhSIXNBElhvWMMrOEViFXj6qsXaAEmQrUcFP48rP+9PUxsRPV3BiEeLrHK9Vr\n6H0bPzlKnn+IwGg5xg61Djiv7AxU3ebHjH3PqfcdQwT+/varkC7CWDVViEskzGCL\nELN3oRsmumBXoCDVgVDEo19Ju5pQRef9oN3spQhE793NUxfEUcf51umNQbT+AhuJ\nvHQqoxtTooogzRlN8HIb2hL1Ewlvi1MwnxQLkII7sY2j8VwTbmMz56Sc2WvfJw3X\n+rHcKhIfAgMBAAECggEATOi2sQK/qPN1YiyqVzIJzceoPYduWH9lOd1dorGCRK6Y\nJWLCPbSaf0iXsg25GYGampjMZNLC2nuotX7tNI5LW9bWfQhRpdguReaD6SZsdY1Z\nyyNMExT+y+6K3egnJ8k8JOx7YOx+RH5wz8M0O69mrK7OrxmC0AXy3cgo620pJJWv\nL4kUXEv/J4qaPjyooK/LHavHrtA0f7M4HbJyX/vEXXZCMk+tqOko0ET8uJvdpQ/e\nrR9pKQw2ImVm2IZVi2AJ3yyhxAedjHCo/1SVQkNLlBXKXYW0D3SDQCK8yY8pTePr\nWYh7QfqqLnnyWfDhc7q2JR5WOm5C+kySYoVa5vgxUQKBgQD6pbURm8sLjgWTsUuv\nc4m09Zok/dmUELn/fkANiZNbVm2ljHk3i8cjat/ipeRR9gYDBy3Eb5CPxjh2AOgT\nwiFPdrs+q71MlBixoYy6gnRnEE5975drtE89w8HtYIjF99Yph4VuztpGEIrgO5XK\nlNlbJxFisIyZBANJW2jdMIaGqwKBgQDPu4eXyAVlIPAdJWIN333/L/F5FVgIQM3P\nWF0Ifrw9yV9D7gcTA/MOsmXS+6P7GDmIpJKP4yCA2yeeXNyVdYTFn7zjwGJ8/Zvs\nWvU68IIHOE1j8WkQcm50sZ1qepIgSwxl1B3KPBfFHOo3msbCbpwzql2b492du6M7\nzvHDBflyXQKBgBqJzwklQLNhfy+rFwNlrU/urTp7cj0eJENr/6YvSd3i4cske3Up\nJJWYbEoYHHudG/fYG71vvpOqfjHoWKo25MYAIUU6c9mW2KJ+I2NgCqka7eShqJur\nxLQadP8IOJMVcaSGB9e6qRvABqRFSs/fQMBI+6tCXDCbXym2Nv0sdSHvAoGBALpJ\nTrBTZFsrLYjFpGgSevgkc2SFOnu0OZxufoeGt6Kk+jR9uYRY71fHrb6FgalEMRwT\nkYdNRDGp1p6SYhH54EYlGIwZU3kJKRHNA8uGMOTunaA5tmFUbS9itGrvXiltg8Gx\ndcGNIDfY1UVmHEXyUUuXxPhuYKf5w8l3rKCas/bVAoGAaGqvyU8kzTcPhFmQ7zpV\nuwyyfIET8s7fRoPuTbsXJ0ZS4EcMxJIjjjNZWjAlOU4jLXdWtB2Iy86Sz8+BNld0\nwYVli+SF/UOpnLLST7Dex6uPRyoiFuvCI27Z9wme01ZZz37KsQ/2WTKuPm7BU0PU\narOuKjJh65kMudLhyj+VgcY=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-esydv@betcha-challenge.iam.gserviceaccount.com",
    "client_id": "114246311519212196956",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-esydv%40betcha-challenge.iam.gserviceaccount.com"
  }


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://betcha-challenge.firebaseio.com"
});

const config =  {
    apiKey: "AIzaSyDrAgmUpM2HrKl_DxjyVWwsE6j-CXHbEww",
    authDomain: "betcha-challenge.firebaseapp.com",
    databaseURL: "https://betcha-challenge.firebaseio.com",
    projectId: "betcha-challenge",
    storageBucket: "betcha-challenge.appspot.com",
    messagingSenderId: "838488018068",
    appId: "1:838488018068:web:e73c301904c4b287da7881",
    measurementId: "G-XB6QEF616J"
  };

const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

app.get('/dataSet', (req, res) => {
    db
    .collection('dataSet')
    .orderBy('createdAt', 'desc') //get the latest register user
    .get()
    .then(data => {
        let dataSet = [];
        data.forEach((doc) => {
            dataSet.push({
                dataSetId: doc.id,
                //...doc.data()
                userName: doc.data().userName,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                email: doc.data().email,
                createdAt: doc.data().createdAt
            })
        })
        return res.json(dataSet);
    })
    .catch(err => console.error(err));
})


app.post('/dataSets', (req, res) => {

const newDataSet = {
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    createdAt: new Date().toISOString()
};

db
 .collection('dataSet')
 .add(newDataSet)
 .then((doc) => {
     res.json({ message: `document ${doc.id} created successfully` });
     return console.log("created user successfully");
 })
 .catch((err) => {
     res.status(500).json({ error: 'something went wrong'});
     console.error(err);
 });
});

//signuproute
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };
    //TODO: validate date
    db.doc(`/users/${newUser.handle}`).get()
    .then(doc => {
        if(doc.exists){
            return res.status(400).json({ handle: 'this handle is already taken'});
        } else {
            return firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
        }
    })
    .then(data => {
       return data.user.getIdToken()
    })
    .then(token => {
        return res.status(201).json({ token })
    })
    .catch(err => {
        console.error(err);
        if(err.code ===  "auth/email-already-in-use") {
            return res.status(400).json({ email:  "Email is already in use"})
        } else {
        return res.status(500).json({ error: err.code });
    }
});
});
exports.api = functions.region("europe-west1").https.onRequest(app);