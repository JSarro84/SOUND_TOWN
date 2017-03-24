// 1. firebase element: 
	// to make data the user entry persistent: project requirement

// Initialize firebase
var config = {
    apiKey: "AIzaSyBNq1JbjecyGbBMGvqIQn3lSL7vO0ZyzV8",
    authDomain: "soundtown-9d008.firebaseapp.com",
    databaseURL: "https://soundtown-9d008.firebaseio.com",
    storageBucket: "soundtown-9d008.appspot.com",
    messagingSenderId: "669604732692"
};

firebase.initializeApp(config);

var database = firebase.database();

var genreCounter = 0;
var cityCounter = 0;

$("#genre-button").on("click", function() {

	genreCounter ++;

	database.ref().set({
	        genreCount: genreCounter
	});
});

$("#city-button").on("click", function() {

cityCounter ++;

	database.ref().set({
		cityCount: cityCounter
	})
});


// Images API Code


var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + image + "&api_key=dc6zaTOxFJmzC";

$.ajax({
         url: queryURL,
         method: "GET"
})

.done(function(response) {
         console.log(queryURL);
		 console.log(response);

// var images = response.images;
// console.log("images", images);
     
// for (var i = 0; i < images.length; i++) {
//  var image = images[i];
//  console.log(image);
//  var imageURL = image.url;
//  var albumImage = "<img src='" + images + "'/>";
//  $("#albumImage").append(albumImage);


// }
});

var queryURL = "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj";

$.ajax({
         url: queryURL,
         method: "GET"
})

.done(function(response) {
         console.log(queryURL);

// console.log(response);
// var images = response.images;
// console.log("images", images);
     
// for (var i = 0; i < images.length; i++) {
//  var image = images[i];
//  console.log(image);
//  var imageURL = image.url;
//  var albumImage = "<img src='" + images + "'/>";
//  $("#albumImage").append(albumImage);


});
