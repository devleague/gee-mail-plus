 /*
          <li class="email">
            <span class="sender">Sender</span>
            <span class="subject">Subject</span>
            <span class="date">Date</span>
          </li>
 */
 $(document).ready(function(){

    var $body = $('#body');
    var $subject = $('#subject');
    var $sender = $('#sender');
    var $date = $('#date');
    
    var inbox = $('#inbox');

    $("span").each(function(index) {
      console.log(index + $sender.text() + $subject.text() + $date.text() );
    });

    $.each(geemails, function(index, obj){
      console.log(obj);

      var span = $('<li class="email"> + <span class="sender"> ' + obj.sender + ' </span>   <span class="date"> ' + obj.date + ' </span>  <span class="subject"> ' + obj.subject + ' </span> </li>');


      //li.addClass('email')

      inbox.append(span);

      $('.sender').html(geemails[index].sender);
      $('.subject').html(geemails[index].subject);
      $('.date').html(geemails[index].date);
      // $('#body').html(geemails[index].body); //Do an onclick function to display//

    // $('#subject').html(obj[]);
  
    });



  });
  