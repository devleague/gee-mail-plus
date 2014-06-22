(function() {

    var newMessage = setInterval(displayNewMessage, 3000);
    var getNewMessageFlag = true; //set flag for button

    var inboxCount = 10;
    function displayNewMessage() {
        if (getNewMessageFlag == true) {//if switch is on, get msgs
           addMessageToEmailList(getNewMessage());//adds new msg
           inboxCount++;
           $('#inboxCounter').html(inboxCount);//increases inbox count
           console.log(inboxCount);
        }
        
    }

    //populates inbox with 10 emails
    for (var i = 0; i < geemails.length; i++) {
        addMessageToEmailList(geemails[i]);
    };

    function addMessageToEmailList(message) {
        var li = $('<li></li>');
        var date_field = $('<span>' + message.date + '</span>');
        var sender_field = $('<span>' + message.sender + '</span>');
        var subject_field = $('<span>' + message.subject + '</span>');
        
        li.append(date_field);
        li.append(subject_field);
        li.append(sender_field);

        $('#emailList').append(li);
    };

    $('#stop_messages').click(function() {//button to start/stop
        if (getNewMessageFlag == true) {//if switch on...
            getNewMessageFlag = false;//set to false to stop
        } else {
            getNewMessageFlag = true;//or if off, change to true to turn back on
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



