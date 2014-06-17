//STEP 3  page loads, via JavaScript access 
//prepopulated data stored in window.geemails variable



 // STEP 6 RETURNS NEWLY CREATED MSG

//gets messages
setTimeout (function() {getNewMessage()}, 3000);
    console.log(getNewMessage());

//puts messages in browser according to
//date, sender and subject
//var subject = generateMessage();
$dates = $('#dates');
$.each(subject, function(index, subject) {
  $('#dates').append('<div>' + subject.dates + '</div>');
}); 

$senders = $('#senders');
$.each(sender, function(index,sender) {
  $('#senders').append('<div>' + sender.senders + "</div");
});

$subjects = $('#subjects');
$.each(subject, function(index,subject) {
  $('#subjects').append('<div>' + subject.senders + "</div");
});    

