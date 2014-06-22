
(function () {

    var inbox = $('#inbox');

    setInterval(function () {
      addMessageToInbox(getNewMessage());
    }, 3000);

    for(var i= 0; i < geemails.length; i++){
      addMessageToInbox(geemails[i]);
      console.log(i);
    };

    function addMessageToInbox(message){

      var li = $('<li class="mailMessageShow"></li>');
          
      var sender_field = $('<span>' + message.sender + '</span>');
      var date_field = $('<span>' + message.date + '</span>');
      var subject_field = $('<span>' + message.subject + '</span>');
      var body_field = $('<p>' + message.body + '</p>')

      li.append(sender_field);
      li.append(subject_field);
      li.append(date_field);
      li.append(body_field);
      
      inbox.append(li);

    }; // ends function addMessageToInbox 

  $('.mailMessageShow').click(function() {
    $(this).find( "p" ).toggle( "slow" );
  }); 

})();  
