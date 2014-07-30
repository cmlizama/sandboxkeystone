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
  //console.log(Members)
  // var view, etc. as in the existing screens
  view.on('init', function(next) {
    Members.model.find().sort('name').exec(function(err, members) {
      //console.log(members)
      for (var i = members.length - 1; i >= 0; i--) {
      	members[i].index = i+1;
        var nextIndex = i+1;
        if (nextIndex == members.length){
          members[i].nextId = members[i]._id;
        } else {
          members[i].nextId = members[nextIndex]._id;
        }

      };
      locals.members = members;

      next();
    });
  });

  //console.log('index js file');

	// Render the view
	view.render('index');

};
