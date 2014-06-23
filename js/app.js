
(function () {

  var inbox = $('#inbox');
  // var counter = $('<div id="counter"><div>')
    
 

 for(var i= 0; i < geemails.length; i++){
    metaContent(geemails[i]);
  }

  function metaContent(message){

  var li = $('<li></li>');
        
  var sender_field = $('<span>' + message.sender + '</span>');
  var date_field = $('<span>' + message.date + '</span>');
  var subject_field = $('<span>' + message.subject + '</span>');
  var body_field = $('<p>' + message.body + '</p>')

  li.append(sender_field);
  li.append(subject_field);
  li.append(date_field);
  li.append(body_field);

  li.click(function() {
    $(this).find( "p" ).toggle( "slow" );
  });  

  inbox.append(li);
  } 

  var counter = 10;
  function inBoxCounter(){
    counter++;
    $("h1").replaceWith('<h1>' + "You have " + counter + " unread messages" + '</h1>');
  }

  setInterval(function(){
    metaContent(getNewMessage());
    inBoxCounter();
  }
  , 1000);

})();  
