const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../config/filehandle.config');
var fs = require('fs');

// TODO: Delete it later and put in config file
// const mongoose = require('mongoose');


router.get('/', (req, res) => {
    res.send('Hello, World');
});

router.post('/file', (req, res) => {
    const uploadJSON = upload.single('jsonFile');

    uploadJSON(req, res, function (err) {
        if (err instanceof multer.MulterError) {
        } else if (err) {
            console.log('Error Occurd');
            res.status(404).send("Oh uh, something went wrong: " + err.code);
        } else {
            var obj = JSON.parse(fs.readFileSync(req.file.path, 'utf8'));
            console.log(obj);
            res.send('Response')
            // TODO: Remove later use mongoose and structure the code
            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/";

            // MongoClient.connect(url, function (err, db) {
            //     if (err) throw err;
            //     var dbo = db.db("mydb");
            //     var myobj = [
            //         { _id: 1, name: 'John', address: 'Highway 71' },
            //         { _id: 2, name: 'Peter', address: 'Lowstreet 4' },
            //         { _id: 3, name: 'Amy', address: 'Apple st 652' },
            //         { _id: 4, name: 'Hannah', address: 'Mountain 21' },
            //         { _id: 5, name: 'Michael', address: 'Valley 345' },
            //         { _id: 6, name: 'Sandy', address: 'Ocean blvd 2' },
            //         { _id: 7, name: 'Betty', address: 'Green Grass 1' },
            //         { _id: 8, name: 'Richard', address: 'Sky st 331' },
            //         { _id: 9, name: 'Susan', address: 'One way 98' },
            //         { _id: 10, name: 'Vicky', address: 'Yellow Garden 2' }
            //     ];
            //     dbo.collection("customers").insertMany(myobj, function (err, res) {
            //         if (err) throw err;
            //         console.log("Number of documents inserted: " + res.insertedCount);
            //         res.send('Response');
            //     });
            // });
        }
    })
});

module.exports = router