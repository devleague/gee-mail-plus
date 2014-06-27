
(function () {

  var inbox = $('#inbox');

 // var messages = [];

  for(var i= 0; i < geemails.length; i++){
    metaContent(geemails[i]);
  };

  function metaContent(message){

    // message.read = null;
    // message.push[messages]

    var li = $('<li data-read-at= "" class="unread_message"></li>');
          
    var sender_field = $('<span>' + message.sender + '</span>');
    var date_field = $('<span>' + message.date + '</span>');
    var subject_field = $('<span>' + message.subject + '</span>');
    var body_field = $('<p>' + message.body + '</p>')

    li.append(sender_field);
    li.append(subject_field);
    li.append(date_field);

    li.click(function() {
      console.log("click");
      $(this).find( "p" ).toggle( "slow" );
      li.append(body_field);
      $(this).removeClass("unread_message");
        if ($(this).attr('data-read-at') == ""){
            $(this).attr('data-read-at', Date.now());
        }
    });  

    inbox.append(li);

    li.addClass("message-row");

    var checkbox = $('<input type="checkbox"/>');

    checkbox.prependTo(li);

    checkbox.click(function(){
      $(this).addClass("checked");
      //console.log($(".checked").length);
      });

    $("button").click(function(){
      $(".checked").closest(li).remove();
      inBoxCounter();
    });

  };


function inBoxCounter(){
var n = $(".message-row").length; 
  $("h1").replaceWith('<h1>' + "You have " + n + " messages" + '</h1>');
  //console.log(n);
};

setInterval(function(){
  metaContent(getNewMessage());
  inBoxCounter();
}
, 10000);



})();  

 

var deleteButton = $('<span id="delete"></span>')