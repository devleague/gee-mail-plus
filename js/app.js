 $(document).ready(function(){

    var $body = $('#body');
    var $subject = $('#subject');
    var $sender = $('#sender');
    var $date = $('#date');
    
    $.each(geemails, function(index, obj){

      $('#subject').html(geemails[index].subject);
      $('#sender').html(geemails[index].sender);
      $('#date').html(geemails[index].date);
      $('#body').html(geemails[index].body); //Do an onclick function to display//
    // $('#subject').html(obj[]);
  
    });

    });
  