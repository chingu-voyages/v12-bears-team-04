const { db } = require('../util/admin');

const config = require('../util/config')

const firebase = require('firebase');
firebase.initializeApp(config)

exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        userName: req.body.userName,
    };

    let errors = {};

    if(isEmpty(newUser.email)) {
        errors.email = 'Email must not be empty'
    } else if(!isEmail(newUser.email)){
        errors.email = 'Enter a valid email address'
    }
    if(isEmpty(newUser.password)) errors.password = 'Please enter your Password'
    if(newUser.password !== newUser.confirmPassword) errors.confirmPassword = 'Password does not match, Please make sure enter exact same password again';
    if(isEmpty(newUser.userName)) errors.userName = 'Pleasenter your username'

    if(Object.keys(errors).length > 0) return res.status(400).json(errors);
   
    let token, userId;
    db.doc(`/users/${newUser.userName}`)
    .get()
    .then((doc) => {
        if(doc.exists){
            return res.status(400).json({ userName: 'The userName is already taken'});
        } else {
            return firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
        }
    })
    .then((data) => {
        userId = data.user.uid;
       return data.user.getIdToken();
    })
    .then((idToken) => {
        token = idToken;
        const userCredentials = {
            userName: newUser.userName,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            userId
        };
        return db.doc(`/users/${newUser.userName}`).set(userCredentials);
    })
    .then(() => {
        return res.status(201).json({ token });
    })
    .catch((err_) => {
        console.error(err);
        if(err.code ===  "auth/email-already-in-use") {
            return res.status(400).json({ email:  "Email is already in use"})
        } else {
        return res.status(500).json({ error: err.code });
    }
});
}

exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    let errors = {};
    
    if(isEmpty(user.email)) errors.email = 'Enter a Valid email';
    if(isEmpty(user.password)) errors.password = 'Enter a valid password';

    if(Object.keys(errors).length > 0) return res.status(400).json(errors);

    firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
        return data.user.getIdToken();
    })
    .then((token) => {
        return res.json({ token });
    }) 
    .catch((err) => {
        console.error(err);
        if(err.code === 'auth/wrong-password') {
            return res
            .status(403)
            .json({ general: 'Incorrect password, please try again' });
        } else return res
        .status(500)
        .json({ error: err.code });
    });
}
