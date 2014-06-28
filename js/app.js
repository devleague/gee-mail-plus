(function(){

	for(var i = 0; i<geemails.length; i++){ 
		different(geemails[i]);
	};

	function different(mail){
		var emailContainer = $("<div class='email'></div>");
		var emailSender = $("<h3 class='email_sender'>"+ mail.sender +"</h3>");
		var emailSubject = $("<p class='email_subject'>"+ mail.subject +"</p>");
		var emailDate = $("<p class='email_date'>"+ mail.date +"</p>");
		var emailBody = $("<p class='email_body'>"+ mail.body +"</p>").hide();
	
		$(emailContainer)
			.append(emailSender)
			.append(emailSubject)
			.append(emailDate)
			.append(emailBody)

		$(".messages").append(emailContainer);
	}

	//upon clicking any part of emailContainer, find the email body and show it on the page//
	$(".messages").on("click", ".email", function(){
		$(this).find(".email_body").show();
	});

	//show an inbox count that shows the current number of messages//
	function countEmail(){
		var countEmail = $(".email").length;
		document.getElementById("inbox_counter").innerHTML = countEmail;

	}


	// Set a recurring function to via the JavaScript setTimeout function that 
	// will call a getNewMessage function that we have created for you that will 
	// return a newly created message with the same properties as your previous messages.
	// create a function that calls getNewMessage using setinterval
	// the new messages are displaying in the console as Objects

 	setInterval(function(){
 		different(getNewMessage());
 		countEmail;
 	}, 10000);


})();









//create an array to store if messages have been read or not//
// var messages = [];

// function mail(message){

// message.read = null;

// messages.push(message)

// }

// $("p").click(function (){
// 	.show('messagebody');

