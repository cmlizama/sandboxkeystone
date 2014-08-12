var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res),
    locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  //locals.section = 'connect';

  //load the members
  var Members = keystone.list('Members');
  // var view, etc. as in the existing screens
  view.on('init', function(next) {
      Members.model.find().sort('name').exec(function(err, members) {
        locals.members = members;
        next();
      });
  });
  //console.log('about view/*.js');

  // Render the view
  view.render('connect');

};
