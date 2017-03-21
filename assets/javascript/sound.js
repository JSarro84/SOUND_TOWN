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


// Dropdown fields/variable for storage of genre options user can search 
var genre = [
	Jazz,
	Metal,
	Folk
	];

// Dropdown fields for city search
var city = [
	Oakland,
	San_Francisco,
	San_Jose
	];

// Calling input from dropdown genre menu
$("#action").on("click", add);
// Adding inital load to firebase

function add (){
         event.preventDefault();

 var genreSearch={
 	Jazz: $("#genre").val(),
 }

// 2. search/sort element:
	// call api's 
	//function comparing user entry genere with sound cloud id genre 
	// if  ==== then true
	// function comparing user entry city with sound cloud id city
	// if === then true
	// true = show === soundcloud data

// SoundCloud API for genre & city search

// var queryGenreSoundCloudURL = "https://api.soundcloud.com/tracks?client_id=" + genre + "/tracks.genre"
// var queryCitySoundCloudURL = "https://api.soundcloud.com/tracks?client_id=" + city + "/tracks.city"


// // Ajax call for soundcloud api
// $.ajax({
// 	url: queryGenreSoundCloudURL,
// 	method: "GET"
// })

//    .done(function(response){
//    		console.log(response);
// 		// $("#testGenreButtonDropdown")response.html(genre);

//    });





// 3. display selected tile element:
	// display on click form/image which includes api to soundcloud artist id picture id songid and songkick venue id for specific artist from 
	// append request to songkick api with html id that displays soundcloud html id displaying artist
	// this included embed soundcould code and soundkick

