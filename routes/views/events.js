var keystone = require('keystone'),
  _ = require('underscore');

exports = module.exports = function(req, res) {
    var locals = res.locals,
    view = new keystone.View(req, res);

    //locals.section = 'events';

  //load events listing
  var Events = keystone.list('Events');
  //var view, etc. as in the existing screens
  view.on('init', function(next) {
    Events.model.find().exec(function(err, events){
      locals.events = events;
      next();
    });
  });

  //load the members
  var Members = keystone.list('Members');
  // var view, etc. as in the existing screens
  view.on('init', function(next) {
      Members.model.find().sort('name').exec(function(err, members) {
        locals.members = members;
        next();
      });
  });
    
  view.render('events');
};