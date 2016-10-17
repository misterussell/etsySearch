var settings = {
  url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=4umgg0ssq5zwuakpfxl6lfwd&keywords=whiskey&includes=Images,Shop',
  type: 'GET',
  dataType: 'jsonp',
  success: function(data) {
    console.log(data);
  },
  error: function(error) {
    console.log('error from api request' , error);
  }
};

console.log($.ajax(settings));
// API Key - 4umgg0ssq5zwuakpfxl6lfwd
// API - no restriction: https://openapi.etsy.com/v2/listings/active?api_key=4umgg0ssq5zwuakpfxl6lfwd
// API - restrictions added: https://openapi.etsy.com/v2/listings/active?api_key=4umgg0ssq5zwuakpfxl6lfwd&keywords=whiskey&includes=Images,Shop
