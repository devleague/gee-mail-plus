//STEP 3  page loads, via JavaScript access 
//prepopulated data stored in window.geemails variable

loadGeeMails();
//console.log(window.geemails);

//puts messages in browser according to
//date, sender and subject
$dates = $('#dates');//create jQuery object
$.each(getNewMessage, function(index, getNewMessage) {// Iterate over a 
  //jQuery object, executing a function for each matched element.
  $('#dates').append('<div>' + message.date + '</div>');//For the id
  //dates, should append the date from message.date in function generateMessage(date)
}); 

$senders = $('#senders');
$.each(sender, function(index,sender) {
  $('#senders').append('<div>' + sender.senders + "</div");
});

$subjects = $('#subjects');
$.each(subject, function(index,subject) {
  $('#subjects').append('<div>' + subject.subjects + "</div");
});    


// STEP 6 RETURNS NEWLY CREATED MSG
//gets messages
var newMessage = setInterval (function() {displayNewMessage()}, 2000);
  function displayNewMessage() {
    var now = getRandomDate();
    //console.log($('#dates'));
    //console.log(document.getElementById('dates'));
    document.getElementById('dates').innerHTML = now;

    $('#emailContainer').append('<div></div>')
  }
    console.log(getNewMessage());


// function() {
// for (i = 0; i < window.geemails.length, i++) {
//   $("#subjects").append("<div> Subject: " + window.geemails[i].subject + "sender: " + window.geemails[i].sender + "</div>" );

// }
// };
    


