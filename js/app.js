for(var i = 0; i<geemails.length; i++){ 
	var mail=geemails[i]
	console.log(mail.subject)
	console.log(mail.date)
	console.log(mail.sender)
	console.log(mail.body)


	var emailContainer = $("<div class='email'></div>");
	var emailSender = $("<h3 class='email_sender'>"+ mail.sender +"</h3>");
	var emailSubject = $("<p id='email_subject'>"+ mail.subject +"</p>");
	var emailDate = $("<p class='email_date'>"+ mail.date +"</p>");
	var emailBody = $("<p id='email_body'>"+ mail.body +"</p>").hide();

	//upon clicking any part of emailContainer, find the email body and show it on the page//
	emailContainer.click(function(){
		$(this).find('#email_body').show();
	});


	$(emailContainer)
		.append(emailSender)
		.append(emailSubject)
		.append(emailDate)
		.append(emailBody)

	$(".messages").append(emailContainer);

}

	//show an inbox count that shows the current number of messages//
	var countEmail = $(".email").length;
	console.log(countEmail);
















//create an array to store if messages have been read or not//
// var messages = [];

// function mail(message){

// message.read = null;

// messages.push(message)

// }

// $("p").click(function (){
// 	.show('messagebody');

