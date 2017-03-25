//Navigation Functions
// =====================================================================
(function($) {
    "use strict"; // Start of use strict

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });
})(jQuery); 
//End Navigation Functionsand End of use strict

//Start Masonry Function 
// =====================================================================
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
console.log("ADDING GRID");
$grid.on( 'click', '.grid-item-content', function() {

  var itemContent = this;
  setItemContentPixelSize( itemContent );

  var itemElem = itemContent.parentNode;
  $( itemElem ).toggleClass('is-expanded');

  // force redraw
  var redraw = itemContent.offsetWidth;
  // renable default transition
  itemContent.style[ transitionProp ] = '';

  addTransitionListener( itemContent );
  setItemContentTransitionSize( itemContent, itemElem );

  $grid.masonry();
});

var docElem = document.documentElement;
var transitionProp = typeof docElem.style.transition == 'string' ?
    'transition' : 'WebkitTransition';
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProp ];

function setItemContentPixelSize( itemContent ) {
  var previousContentSize = getSize( itemContent );
  // disable transition
  itemContent.style[ transitionProp ] = 'none';
  // set current size in pixels
  itemContent.style.width = previousContentSize.width + 'px';
  itemContent.style.height = previousContentSize.height + 'px';
}

function addTransitionListener( itemContent ) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function() {
    itemContent.style.width = '';
    itemContent.style.height = '';
    itemContent.removeEventListener( transitionEndEvent, onTransitionEnd );
  };
  itemContent.addEventListener( transitionEndEvent, onTransitionEnd );
}

function setItemContentTransitionSize( itemContent, itemElem ) {
  // set new size
  var size = getSize( itemElem );
  itemContent.style.width = size.width + 'px';
  itemContent.style.height = size.height + 'px';
}

// 2nd part

// external js: masonry.pkgd.js

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

window.$grid = $grid;

$grid.on( 'click', '.grid-item-content', function() {

  var itemContent = this;
  setItemContentPixelSize( itemContent );

  var itemElem = itemContent.parentNode;
  $( itemElem ).toggleClass('is-expanded');

  // force redraw
  var redraw = itemContent.offsetWidth;
  // renable default transition
  itemContent.style[ transitionProp ] = '';

  addTransitionListener( itemContent );
  setItemContentTransitionSize( itemContent, itemElem );

  $grid.masonry();
});

var docElem = document.documentElement;
var transitionProp = typeof docElem.style.transition == 'string' ?
    'transition' : 'WebkitTransition';
var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProp ];

function setItemContentPixelSize( itemContent ) {
  var previousContentSize = getSize( itemContent );
  // disable transition
  itemContent.style[ transitionProp ] = 'none';
  // set current size in pixels
  itemContent.style.width = previousContentSize.width + 'px';
  itemContent.style.height = previousContentSize.height + 'px';
}

function addTransitionListener( itemContent ) {
  // reset 100%/100% sizing after transition end
  var onTransitionEnd = function() {
    itemContent.style.width = '';
    itemContent.style.height = '';
    itemContent.removeEventListener( transitionEndEvent, onTransitionEnd );
  };
  itemContent.addEventListener( transitionEndEvent, onTransitionEnd );
}

function setItemContentTransitionSize( itemContent, itemElem ) {
  // set new size
  var size = getSize( itemElem );
  itemContent.style.width = size.width + 'px';
  itemContent.style.height = size.height + 'px';
}
// ENDS MASONRY

// Start Ghiphy Fuction
// ======================================================================
  var topics = ['Prince', 'Beyonce', 'Gorillaz' ];

$(document).ready(function(){createButtons();
$('#addartistBreed').on('click', function(){
    addartistBreed();

    return false;
    })

});

function displayartistBreedInfo(){
    var artistBreed = $(this).data('breed');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artistBreed + "&api_key=dc6zaTOxFJmzC&limit=30";

    $.ajax(
        {url: queryURL, method: 'GET'})
        .done(function(response) 
        {

    var results = response.data;
        for (var i = 0; i < results.length; i++) {
    var gifDiv = $('<div class="gifDiv">')
    var rating = results[i].rating;
    var p = $('<p>').text( "Rating: " + rating);
    var myGridItem =
      '<div class="grid-item">' +
       '<div class="grid-item-content"><img src="' + results[i].images.fixed_height_still.url + '" data-still="' + '"> </div>' +
      '</div>';
    var artistBreedImage = $('<img>');
        artistBreedImage.attr('src', results[i].images.fixed_height_still.url);
        artistBreedImage.attr('data-still', results[i].images.fixed_height_still.url);
        artistBreedImage.attr('data-animate', results[i].images.fixed_height.url);
        artistBreedImage.attr('data-state', 'still');
        artistBreedImage.attr('class', 'gif');

        gifDiv.append(artistBreedImage)
        gifDiv.append(p)

            $('.grid').prepend(myGridItem);
        }

    });
}

function animateAndpauseGif(){
    var state = $(this).attr('data-state');
        if ( state == 'still'){

        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');

        }else{

        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');

    }
}

function createButtons(){
    $('#buttonsAppearHere').empty();
    for (var i = 0; i < topics.length; i++) {

    var x = $('<button>')
        x.addClass('buttons');
        x.text(topics[i]);
        x.attr('data-breed', topics[i]);
        $('#buttonsAppearHere').append(x);

    }
}

function addartistBreed(){
    var newBreed = $('#artistBreed-input').val().trim();
    console.log(newBreed + "here");
    topics.push(newBreed);
    createButtons();

}

$(document).on('click', '.gif', animateAndpauseGif)
$(document).on('click', '.buttons', displayartistBreedInfo)
// END OF GHIPHY










//Starts Artist Sound Track (Spotify) Function
// =====================================================================
  function getArtistTrack(artist) {
    // Running an initial search to identify the artist's unique Spotify id
    var queryURL = "https://api.spotify.com/v1/search?q=" + artist + "&type=artist";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      // Printing the entire object to console
      console.log(response);
      // Printing the artist id from the Spotify object to console
      var artistID = response.artists.items[0].id;
      // Building a SECOND URL to query another Spotify endpoint (this one for the tracks)
      var queryURLTracks = "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks?country=US";
      // Running a second AJAX call to get the tracks associated with that Spotify id
      $.ajax({
        url: queryURLTracks,
        method: "GET"
      }).done(function(trackResponse) {
        // Logging the tracks
        console.log(trackResponse);
        // Building a Spotify player playing the top song associated with the artist
        // (NOTE YOU NEED TO BE LOGGED INTO SPOTIFY)
        var player = "<iframe src='https://embed.spotify.com/?uri=spotify:track:" +
          trackResponse.tracks[0].id +
          "' frameborder='0' allowtransparency='true'></iframe>";
        // Appending the new player into the HTML
        $("#player-div").append(player);
      });
    });
  }

  // Event handler for user clicking the select-artist button
  $("#select-artist").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var artist = $("#artist-input").val().trim();
    // Running the getArtistTrack (passing in the artist as an argument)
    getArtistTrack(artist);
  });
 //Ends Artist Sound Track (Spotify) Function 

 // Images 
 // =============================