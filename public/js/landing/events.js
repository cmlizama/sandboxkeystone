$(function() {

  //request eventbrite api data when hitting /events page
  console.log('ey from /landing/events.js');
  $.get('/getEventbrite', function(data){
    console.log(data);
  });

});