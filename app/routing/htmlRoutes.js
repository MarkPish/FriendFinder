var express = require('express');
var path = require('path');

var router = express.Router();

// route that sends the user first to the Welcome Page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// route to send to the survey page
router.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;

