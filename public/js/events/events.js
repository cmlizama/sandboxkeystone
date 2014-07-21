$(function() {

  //request eventbrite api data when hitting /events page
  console.log('ey from events/events.js');
  $.get('/getEventbrite', function(data){
    console.log('ey from the get request in events/events.js');
  });

});