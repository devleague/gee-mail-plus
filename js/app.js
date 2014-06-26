for(var i = 0; i<geemails.length; i++){ 
	var mail=geemails[i]
	console.log(mail.subject)
	console.log(mail.date)
	console.log(mail.sender)
	console.log(mail.body)


var emailContainer = $("<div></div>");
var emailSender = $("<h3>"+ mail.sender +"</h3>");
var emailSubject = $("<p>"+ mail.subject +"</p>");
var emailDate = $("<p>"+ mail.date +"</p>");
var emailBody = $("<p>"+ mail.body +"</p>").hide();


$(emailContainer)
	.append(emailSender)
	.append(emailSubject)
	.append(emailDate)
	.append(emailBody)

$(".messages").append(emailContainer);


// $("<h3 id=\"email" + i + "\">" +(mail.sender)+"</h3>").appendTo($("body"))
// $("<p>"+(mail.subject)+"</p>").appendTo($("body"))
// $("<p>"+(mail.date)+"</p>").appendTo($("body"))
// $("<h3>"+(mail.body)+"</h3>").appendTo($("body"))

}