//STEP 3  page loads, via JavaScript access 
//prepopulated data stored in window.geemails variable

loadGeeMails();

 // STEP 6 RETURNS NEWLY CREATED MSG

//gets messages
setTimeout (function() {getNewMessage()}, 3000);
    console.log(getNewMessage());

//puts messages in browser according to
//date, sender and subject
$dates = $('#dates');//create jQuery object
$.each(generateMessage, function(index, generateMessage) {// Iterate over a 
  //jQuery object, executing a function for each matched element.
  $('#dates').append('<div>' + generateMessage.dates + '</div>');//For the id
  //dates, should append the date from message.date in function generateMessage(date)
}); 

$senders = $('#senders');
$.each(sender, function(index,sender) {
  $('#senders').append('<div>' + sender.senders + "</div");
});

$subjects = $('#subjects');
$.each(subject, function(index,subject) {
  $('#subjects').append('<div>' + subject.senders + "</div");
});    

