//STEP 3  page loads, via JavaScript access 
//prepopulated data stored in window.geemails variable



 // STEP 6 RETURNS NEWLY CREATED MSG

//gets messages
 setTimeout (function() {getNewMessage()}, 3000);
    console.log(getNewMessage());

//puts messages in browser
var putsMessagesIn = getNewMessage();
$dates = $('dates');
$.each(putsMessagesIn, function(index, putsMessagesIn) {
  $('#dates').append('<div>' +putsMessagesIn.dates+'</div>');
}); 
    