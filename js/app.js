(function() {

    var newMessage = setInterval(displayNewMessage, 3000);
    function displayNewMessage() {
    //    // var getNewMessage = true;
    // $('#stop_messages').click(function() {
    //     count++;

    //     if (count = 1 || count % 2 !== 0) {
    //         clearInterval(newMessage);
    //     } else {
    //         setInterval(displayNewMessage, 3000);
    //     }
    // });
    //     addMessageToEmailList(getNewMessage());
    // //};

    

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



