(function () {

    var inbox = $('#inbox');

    $.each(geemails, function(index, obj){
      console.log(obj);

    var li = $('<li><li>');
      var date_field = $('<span>' + obj.date + '</span>');
      var sender_field = $('<span>' + obj.sender + '</span>');
      var subject_field = $('<span>' + obj.subject + '</span>');

      li.append(date_field);
      li.append(subject_field);
      li.append(sender_field);

      inbox.append(li);
  
    }); // closes $.each(geemails)

})();  