var settings = {
  url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=4umgg0ssq5zwuakpfxl6lfwd&keywords=whiskey&includes=Images,Shop',
  type: 'GET',
  dataType: 'jsonp',
  success: function(data) {
    console.log(data.results);
    var searchData = data.results;
    searchData.map(createPage);
  },
  error: function(error) {
    console.log('error from api request' , error);
  }
};
$body = $('body');
$searchResults = $('.searchResults');

$.ajax(settings);

function createPage(item, i, arr) {
  // var $li = $('li');
  var $createItem = $('<li></li>');
  var $loadPicture = $('<img src="' + item.Images[0].url_fullxfull + '"/>');
  var $loadTitle = $('<h2>' + item.title + '</h2>');
  var $loadSeller = $('<span class="seller">' + item.Shop.shop_name + '</span>');
  var $loadPrice = $('<span class="price">' + item.price + '</span>');
  $body.append($createItem, $loadPicture, $loadTitle, $loadSeller, $loadPrice);

}
