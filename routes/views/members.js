var keystone = require('keystone'),
  async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals,
    view = new keystone.View(req, res);
  
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'members';


  //load the members
  var Members = keystone.list('Members');
  // var view, etc. as in the existing screens
  view.on('init', function(next) {
    Members.model.find().exec(function(err, members) {
      locals.members = members;
      next();
    });
  });

  view.render('members');

};