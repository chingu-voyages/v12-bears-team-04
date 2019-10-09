const functions = require('firebase-functions');

const app = require('express')();

const { getAllDataSet } = require('./handlers/dataSet');
const { signup,login } = require('./handlers/users');

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






const firebase = require('firebase');
firebase.initializeApp(config);


//Dataset route
app.get('/dataSet', getAllDataSet );
//post dataset
app.post('/dataSets',FBAuth, postOneDataSet);

// eslint-disable-next-line consistent-return
const FBAuth = (req, res, next) => {
    let idToken;
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
         idToken = req.headers.authorization.split('Bearer ')[1];
     } else {
         console.erroe('No token found.')
         return res.status(403).json({ error: 'Unauthorized'});
     }

     admin.auth().verifyIdToken(idToken)
     .then(decodedToken => {
         req.user = decodedToken;
         console.log(decodedToken);
         return db.collection('users')
         .where('userId', '==', req.user.uid)
         .limit(1)
         .get();
     })
     .then(data => {
         req.user.userName = data.doc[0].data().userName;
         return next();
     })
     .catch(err => {
         console.error('Error while verifying token', err);
         return res.status(403).json(err);
     })
     };

const isEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false;
}
const isEmpty = (string) => {
    if(string.trim() === '') return true;
    else return false;
}

//sign up route
//verify credentials
// eslint-disable-next-line consistent-return
app.post('/signup', signup);


// eslint-disable-next-line consistent-return
app.post('/login', login);

exports.api = functions.region("europe-west1").https.onRequest(app);