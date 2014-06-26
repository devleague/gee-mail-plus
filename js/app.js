
(function () {

  var inbox = $('#inbox');
    
 

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

    li.click(function() {
    $(this).find( "p" ).toggle( "slow" );
    li.append(body_field);

      

    });  

    inbox.append(li);


    li.addClass("message-row");


    var radioButton = $('<input type="radio"/>');
   
    radioButton.prependTo(li);
    radioButton.click(function(){
      li.remove()
      inBoxCounter();
    });
    
  } 




function inBoxCounter(){
var n = $(".message-row").length; 
  $("h1").replaceWith('<h1>' + "You have " + n + " messages" + '</h1>');
  console.log(n);
}

setInterval(function(){
  metaContent(getNewMessage());
  inBoxCounter();
}
, 3000);



})();  

 

var deleteButton = $('<span id="delete"></span>')