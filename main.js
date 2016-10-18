function searchBar() {
  var $searchBar = $('.searchBar');

  var createSearch = $('<form class="search" action="index.html" method="post"><input type="text" name="name" class="userSearch" value=""></form><button class="submit">Search</button>');

  $searchBar.append(createSearch);
}

//LOAD INITIAL SEARCH
searchBar();

function settings(searchTerm) {
  var settings = {
    url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=4umgg0ssq5zwuakpfxl6lfwd&keywords=' + searchTerm + '&includes=Images,Shop',
    type: 'GET',
    dataType: 'jsonp',
    success: function(data) {
      // console.log(data.results);
      var searchData = data.results;
      searchData.map(loadResults);
    },
    error: function(error) {
      console.log('error from api request' , error);
    }
  };
  return settings;
}

function loadResults(item, i, arr) {
  // var $li = $('li');
  var $h2 = $('h2');
  // var $textLimit = $('.' + item.listing_id);
  var $searchResults = $('.searchResults');

  var $createItem = $('<a href="' + item.url + '"><li><img src="' + item.Images[0].url_170x135 + '"/><aside><h2 class="' + item.listing_id + '">' + item.title + '</h2><span class="seller">' + item.Shop.shop_name + '</span><span class="price">' + item.price + '</span></aside></li></a>');

  $searchResults.append($createItem);

  // $textLimit.text($textLimit.text().substring(0, 30));
}
// var searchBox = $('.userSearch');
var submit = $('.submit');

submit.on('click', function(e){
  var newSearch = document.querySelector('.userSearch').value;
  // console.log(newSearch);
  searchTerm = newSearch;
  if (!searchTerm) {
    alert('The limit does not exist! Please search something valid.');
  } else {
  $.ajax(settings(searchTerm));
  }
});

// $.ajax(settings(searchTerm));
