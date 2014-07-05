var keystone = require('keystone'),
	_ = require('underscore');

exports = module.exports = function(req, res) {
	
	var locals = res.locals,
		view = new keystone.View(req, res);
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
  //load the members
  var Members = keystone.list('Members');
  // var view, etc. as in the existing screens
  view.on('init', function(next) {
    Members.model.find().exec(function(err, members) {
      for (var i = members.length - 1; i >= 0; i--) {
      	members[i].index = i+1;
      };
      locals.members = members;
      
      next();
    });
  });

	// Render the view
	view.render('index');
	
};
