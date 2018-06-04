(function($) {
  'use strict';

  var lastPage = '';

  $('#new-quote-button').on('click', function(event){
      event.preventDefault();
      $.ajax({
          method: 'get',
          url: api_vars.root_url + 'wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1' ,
          cache: false,
      })
      
      .done(function(data){
          lastPage = document.URL;
            $('.entry-content').html(data[0].content.rendered),
            $('.entry-title').html('&mdash; ' + data[0].title.rendered),
            $('.source').html(data[0]._qod_quote_source);

            if(data[0]._qod_quote_source_url.length > 0){
              $(".source").empty(),
              $(".source").append(', ' + '<a href="' + data[0]._qod_quote_source_url + '">' + data[0]._qod_quote_source + '</a>');
            }

            else if(data[0]._qod_quote_source.length > 0){
               $('.source').html(', ' + data[0]._qod_quote_source);
            }

            else {
              $('.entry-content').html(data[0].content.rendered),
              $('.entry-title').html('&mdash; ' + data[0].title.rendered),
              $('.source').html(data[0]._qod_quote_source);
            }
              history.pushState(null, null, data[0].slug);
      })
      
      .fail(function(){
        alert('Sorry, please try again');
        
      });
  });

  $('.submit-btn').on('click', function (event) {
        event.preventDefault();
        var title = $('#quote-author').val();
        var quote = $('#quote-content').val();
        var source = $('#quote-source').val();
        var sourceUrl = $('#quote-source-url').val();
 
    $.ajax({
        method: 'post',
        url: api_vars.root_url + 'wp/v2/posts/',
        data: {
          title: title,
          content: quote,
          _qod_quote_source: source,
          _qod_quote_source_url: sourceUrl,
          status: "pending"
        },
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce);
        }
      }).done(function () {
        $('#quote-submission-form').hide('slow');
        $('.entry-title').after('<p>' + api_vars.success+ '</p>');

      }).fail(function() {
        alert(api_vars.failure);
      });
    }); 

  $(window).on('popstate', function(){
      window.location.replace(lastPage);
  });

})(jQuery);








