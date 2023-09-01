const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const exp = require("constants");


const user = express();
user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname, 'public')));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }

});

var upload = multer({ storage: storage });

user.post('/importuser',upload.single('file'),);


module.exports = user;


