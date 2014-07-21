var keystone = require('keystone'),
   request = require('request');

exports = module.exports = function(req, res) {
  
  var locals = res.locals,
    view = new keystone.View(req, res);
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'events';
  
  console.log('this is from routes/events.js, but not the api request')
  
  //get eventbrite data
  keystone.get('/getEventbrite', function(req, res){
      request('http://www.google.com', function (error, response, data) {
      if (!error && response.statusCode == 200) {
      console.log("hello from backend routes/events.js"); // Print the google web page.
      res.send(data);
      }
    });
  });

  // var eb_client = Eventbrite({
  //   'app_key':'UOSVLDA5F7ODOWSRYE',
  //   'user_key':'libby@sandboxcoop.com'
  // });

  // eb_client.user_list_events ( { 'user': 'libby@sandboxcoop.com' }, function(err, data){
  //   console.log(err);
  //   console.log(data);
  // });

  // var params = {'city': "San Francisco"};
  // eb_client.event_search( params, function(err, data){
  //   console.log(err);
  //   console.log(data);
  // });

  // Render the view
  view.render('events');
  
};
