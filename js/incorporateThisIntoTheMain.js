// dweetio is the client used for sending data to David's dashboard 
var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();


// PSEUDOCODE
// have some variable, thisRating which records the rating given

// numRatings is the number of votes registered
var numRatings = 0;
// voteTotal = the sum of the votes
var voteTotal = 0;

if (a rating is registered) {
	numRatings++;
	voteTotal += thisRating;
}

var ratingAvg = voteTotal/numRatings;
ratingAvg = Math.round(ratingAvg*100)/100;


// typically, we wouldn't have the key exposed like this ... 
dweetio.dweet_for("fingerRatingAverage211", {some:ratingAvg}, function(err, dweet){
 
    console.log(dweet.thing); // "my-thing" 
    console.log(dweet.content); // The content of the dweet 
    console.log(dweet.created); // The create date of the dweet 
 
});