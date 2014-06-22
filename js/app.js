
(function () {

  var inbox = $('#inbox');
  var inBoxCount = $('#inBoxCounter');
  inboxCount = "10";
  var inboxCount2;
  
 

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

  setInterval(function(){
    inboxCount2 = inBoxCount++;
    console.log(inboxCount2);
    metaContent(getNewMessage());
  }
  , 1000);
   

  

})();  
