/* eslint-disable consistent-return */
const { db, admin } = require('../util/admin');

const config = require('../util/config')

const firebase = require('firebase');
firebase.initializeApp(config)

const { validateSignupData, validateLoginData, reduceUserDetails } =require('../util/validators')
//user signup
exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        userName: req.body.userName,
    };
   
    const { valid, errors } = validateSignupData(newUser);

    if(!valid) return res.status(400).json(errors);

    const noImg = 'no-img.png'
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
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBusket}/o/${noImg}?alt=media`,
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
//login user
exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

       
    const { valid, errors } = validateLoginData(user);

    if(!valid) return res.status(400).json(errors);

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
//add user details
exports.addUserDetails = (req, res) => {
    let userDetails = reduceUserDetails(req.body);

    db.doc(`/users/${req.user.userName}`).update(userDetails)
    .then(() => {
        return res.json({ message: 'Details added successfully'});
    })
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    })
}
// Get own user details
exports.getAuthenticatedUser = (req, res) => {
    let userData = {};
    db.doc(`/users/${req.user.userName}`)
    .get()
    .then(doc => {
        // eslint-disable-next-line promise/always-return
        if(doc.exists){
            userData.credentials = doc.data();
            return db.collection('likes').where('userNmae', '==', req.user.userName).get()
        }
    })
    .then(data => {
        userData.likes = [];
        data.forEach(doc => {
        userData.likes.push(doc.data());
        });
        return res.json(userData)
    })
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    })
}
//upload profile pic
exports.uploadImage = (req, res) => {
 const BusBoy = require('busboy');
 const path = require('path');
 const os = require('os');
 const fs = require('fs');

 const busboy = new BusBoy({ headers: req.headers });

 let imageFileName;
 let imageToBeUploaded = {};

 busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
     if(mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
         return res.status(400).json({ error: 'Wrong File type for image'});
     }
     const imageExtension = filename.split('.')[filename.split('.').length - 1]
     const imageFileName = `${Math.round(Math.random()*1000000000)}.${imageExtension}`;
     const filepath = path.join(os.tmpdir(), imageFileName);
     imageToBeUpload = { filepath, mimetype };
     file.pipe(fs.createWriteStream(filepath));
 });
busboy.on('finish', () => {
    admin.storage().bucket().upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
            metadata: {
                contentType: imageToBeUploaded.mimetype
            }
        }
    })
    .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBusket}/o/${imageFileName}?alt=media`
        return db.doc(`/users/${req.user.userName}`).update({ imageUrl });
    })
    .then(() => {
       return res.json({ message: 'Image upload successfully'}); 
    })
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
    })
})
busboy.end(req.rawBody);
}
