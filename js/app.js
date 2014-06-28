(function(){

	//for loop to pull in the gee mails//
	for(var i = 0; i<geemails.length; i++){ 
		different(geemails[i]);
	};

	//function that pulls in the various parts of each email message by creating a DOM element//
	function different(mail){
		//these vars are storing DOM elements created with jquery
		var emailContainer = $("<div class='email'></div>");
		var emailSender = $("<h3 class='email_sender'>"+ mail.sender +"</h3>");
		var emailSubject = $("<p class='email_subject'>"+ mail.subject +"</p>");
		var emailDate = $("<p class='email_date'>"+ mail.date +"</p>");
		var emailBody = $("<p class='email_body'>"+ mail.body +"</p>").hide();
	
		//appending each attribute to build the email block
		$(emailContainer)
			.append(emailSender)
			.append(emailSubject)
			.append(emailDate)
			.append(emailBody)

		$(".messages").append(emailContainer);

	}

	//count the emails when the page and emails initially load//
	countEmail();

	//upon clicking any part of emailContainer, find the email body and show it on the page//
	//add click event listener to .messages DOM element, which then selects the second parameter .email, then use that 
	//element inside the function to find and show the email body
	$(".messages").on("click", ".email", function(){
		$(this).find(".email_body").show();
	});

	//inbox count that shows the current number of messages//
	function countEmail(){
		var totalEmail = $(".email").length;
		document.getElementById("inbox_counter").innerHTML = totalEmail;
	}

	// Set a recurring function to via the JavaScript setTimeout function that will call a getNewMessage function that we have created for you that will 
	// return a newly created message with the same properties as your previous messages create a function that calls getNewMessage using setinterval
	// the new messages are displaying in the console as Objects

 	setInterval(function(){
 		different(getNewMessage());
 		countEmail();
 	}, 10000);


})();


