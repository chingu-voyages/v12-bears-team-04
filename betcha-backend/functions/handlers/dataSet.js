const { db } = require('../util/admin');

exports.getAllDataSet = (req, res) => {
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
                createdAt: doc.data().createdAt,
                commentCount: doc.data().commentCount,
                likeCount: doc.data().likeCount
            })
        })
        return res.json(dataSet);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ error: err.code });
});
}

exports.postOneDataSet =  (req, res) => {
    if (req.body.userName.trim() === '') {
        return res.status(400).json({ userName: 'Username is invalid'});
    }
   
   const newDataSet = {
       userName: req.user.userName,
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
   }
   