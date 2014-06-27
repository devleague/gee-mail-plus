(function() {

    var newMessage = setInterval(displayNewMessage, 3000);
    var getNewMessageFlag = true; //set flag for button

    function displayNewMessage() {
        if (getNewMessageFlag == true) {//if switch is on, get msgs
           addMessageToEmailList(getNewMessage());//adds new msg
           updateInboxCount();//displays increase of inbox count
        }    
    };

    function updateInboxCount() {
      // count number of messages and displays number of messages
      $('#inboxCounter').html($('#emailList>li').length);    
    }
 
    //populates inbox with 10 emails onload
    for (var i = 0; i < geemails.length; i++) {
        addMessageToEmailList(geemails[i]);
    };

    function addMessageToEmailList(message) {//creates new li
        var li = $('<li data-read-at="" class="unread_message row"></li>');
        var date_field = $('<span class="message_date medium-4 columns">' + message.date + '</span>');
        var sender_field = $('<span class="message_sender medium-3 columns">' + message.sender + '</span>');
        var subject_field = $('<span class="message_subject medium-4 columns">' + message.subject + '</span>');
        var body_field = $('<div class="message_body">' + message.body + '</div>');
        body_field.hide();

        console.log($('#emailList>li').length);

        li.click(function() {//click li to get specific msg
          console.log($(this).find('div.message_body').html());//clicking on 'this' li, find the div
          //class message_body and place that specific content into .html.  can be used for all date
          //sender, subject fields
          $(this).find('div.message_body').toggle();//msg appears/disappear with click
          $(this).removeClass('unread_message');
            if ($(this).attr('data-read-at') == "") {
              $(this).attr('data-read-at', Date.now());
              $(this).css('color','#ADFF2F');
            }

        });
        var deleteButton = $('<button class="round deleteButton medium-1 columns">Delete</button>');
        li.append(deleteButton);
        li.append(date_field);//gets new date, etc info for li
        li.append(sender_field);
        li.append(subject_field);
        li.append(body_field);

        $('#emailList').prepend(li);

        //delete email function
        deleteButton.click(function() {
          $(this).closest("li").remove();
          updateInboxCount();
        });
    };

     

    $('#stop_messages').click(function() {//button to start/stop
        if (getNewMessageFlag == true) {//if switch on...
            getNewMessageFlag = false;//set to false to stop
            $(this).addClass("stopLoadingMessages");
        } else {
            getNewMessageFlag = true;//or if off, change to true to turn back on
            $(this).removeClass("stopLoadingMessages");
        } 
    });

})();

 //        //console.log($('#dates'));
 //        //console.log(document.getElementById('dates'));
 //        $('#newEmailDate').innerHTML = now;
 //    };

 //    var myMessage = getNewMessage();
 //    // $('emailContainer').append('<span>' + $('#senders').sender + '</span>');
 //    // $('emailContainer').append('<span>' + $('#subjects').subject + '</span>');
 //    // console.log(sender);

 //    console.log(myMessage);
 //        //make new html elements for emails to be populated#######

 //      for (var i = 0; i < geemails.length; i++) { 
 //        $('#emailList').append('<li><span>' + geemails[i].date + '</span>' + '<span>' + geemails[i].sender + '</span>' + '<span>' + geemails[i].subject + '</span><li>');  
 //        // console.log(geemails[i]);
 //        // console.log("date: " + geemails[i].date);
 //        // console.log("date: " + geemails[i].subject);
 //        // console.log("date: " + geemails[i].sender);
 //        //console.log("body: " + geemails[i].body);
 //        // console.log(" ");

 //        // $('#senders').append('<span>' + sender + '</span>');
 //        // $('#subjects').append('<span>' + subject + '</span>');
 //      }
  
 // //SHOWING BODY OF MESSAGE WHEN IT IS CLICKED



