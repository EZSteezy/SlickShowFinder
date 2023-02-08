let inputStr;

$('#submitBtn').on('click', getStr);

function getStr() {
  $(document).ready(function () {
    $('body2').empty()
    inputStr = $("#searchInput").val();
    console.log(inputStr);
    getShowName()
  });
};

function getShowName() {
  $.get("https://api.tvmaze.com/search/shows?q=" + inputStr, (data) => {

    console.log(data);

    let stringData = JSON.stringify(data);
    let results = JSON.parse(stringData);

    $.each(results, function (i) {
      $(document).ready(function () {
        jQuery('<div/>', {
          id: "showname" + i.toString(),
          class: "showclass",
          text: results[i]['show']['name']
        }).appendTo('body');

        jQuery('<div/>', {
          id: "genrename" + i.toString(),
          class: 'genreclass',
          text: results[i]['show']['genres']
        }).appendTo($("#showname" + i.toString()));

        jQuery('<div/>', {
          id: 'morename' + i.toString(),
          class: 'moreclass',
          text: 'more details...'
        }).appendTo($('#showname' + i.toString()));

        $('#morename' + i.toString()).contents().wrap('<a href=' + results[i]['show']['url'] + '"></a>');

        var img = $('<img />', {
          id: 'imgid',
          src: results[i]['show']['image']['original']
        }); img.appendTo($("#showname" + i.toString()));
      });
    })
  });
}



// src="${show.image.original}">
//<img />',
//{ id: 'Myid',
//src: 'MySrc.gif',
//width: 300
//.appendTo($('#YourDiv'))
//+ '<td> <img class-"image-border" src="' + results. image. medium + '"> </td>");

//access the search button
//on click search database for 'Search' item
//for each search results list them all


// function(){
//   $('#submit').on('click', getShowName);
//   function getShowName(evt){
//     evt.preventDefault();
//     if($('#showInput')[0].value.length > 0)
//}
//   }
// What do you have?
//   - jQuery to make AJAX requests to an API
//   - jQuery to work with the DOM
//   - Some existing HTML with placeholder information (.result-card)
//   - An API endpoint that has data for me "https://api.tvmaze.com/search/shows?q="
//   - A reference to how to use that API: "https://www.tvmaze.com/api#show-search"

// What do you need?
// When the user clicks the search button, the following needs to happen afterwards:
//     1. I need to take the text they typed in the input box
//     2. I need to get the TV show information based on what the user typed in: "https://api.tvmaze.com/search/shows?q=[SEARCH_STRING]"
//     2. I need to display that information using the .result-card html as a template

// How do you get there?
// I need to use this API endpoint: "https://api.tvmaze.com/search/shows?q="
// I can use the URL bar in my web browser to see what comes back when I visit an end point, e.g."https://api.tvmaze.com/search/shows?q=lost"
// I need to handle a click event on the search button
// I need to get the user information from the input box
// I need to use $.get to make an AJAX request to the endpoint with the user search info, e.g. "https://api.tvmaze.com/search/shows?q=lost"
// I need to use jQuery to recreate the .result-card html and all of it's nested elements
// I need to go through the data sent from the AJAX request and create a result card for each TV show
// I need to add each result card to the #results element.

//$('#showname').empty(); Note for Steve: This line needs to go somewhere for the page to clear old searches and replace with the new searches, I tried placing it in line 26 but it didnt work.
