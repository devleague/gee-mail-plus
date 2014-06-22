
(function () {

    var inbox = $('#inbox');

    for(var i= 0; i < geemails.length; i++){
      console.log(i);

      var li = $('<li class="mailMessageShow"></li>');
          
      var sender_field = $('<span>' + geemails[i].sender + '</span>');
      var date_field = $('<span>' + geemails[i].date + '</span>');
      var subject_field = $('<span>' + geemails[i].subject + '</span>');
      var body_field = $('<p>' + geemails[i].body + '</p>')

      li.append(sender_field);
      li.append(subject_field);
      li.append(date_field);
      li.append(body_field);
      

      inbox.append(li);
  
    } // closes $.each(geemails)

  // var navArea = $('#nav-area');

  $('.mailMessageShow').click(function() {
    $(this).find( "p" ).toggle( "slow" );
  }); 




})();  
