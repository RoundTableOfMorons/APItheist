var query_params = { apikey: 'a12b17ca0d5f2bfba41ee42ec0f051a1',
                     phrase: 'atheist',
                     
                     start_date: '2014-01-09',
                     end_date: '2014-02-14'
                   };
var endpoint = 'http://capitolwords.org/api/text.json';

var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

var request = jQuery.ajax(endpoint, options)
                    .done(showResponse);
