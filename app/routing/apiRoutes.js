//Dependencies
var express = require('express');
var path = require('path');

//do i need to put a const for apiRoute in this page?

var friends = require("../data/friends.js");

// Routes

module.exports = function (app) {
	// Get all potential friends
	app.get("/api/friends", function (req, res) {
		res.json(friends);
    });
 app.post("/api/friends", function(req, res){
    //grabs the new users scores to compare with friends in the friends array
    var newFriendScore = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //loop to run through the current friends list
    for (var i=0; i<friends.length; i++){
        var totalDifference = 0;
        //run through the scores in the friends array to compare friends
        for (var j=0; j<newFriendScore.length; j++){            
            totalDifference +- (Math.abs(parseInt(friends[i].scores[j])- parseInt(newFriendScore[j])));
        }
        //push into the scoresArray
        scoresArray.push(totalDifference);
    }
    // after all friends are compared find the best match based on similar scores
    for (var i=0; i<scoresArray.length; i++){
        if(scoresArray[i]<= scoresArray[bestMatch]){
            bestMatch = i;
        }
    }
    //retun bestMatch data
    var veryBestFriend = friends[bestMatch];
    //push new submission into the friends array

    friends.push(req.body);
    res.json(veryBestFriend);

});

};