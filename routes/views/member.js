var keystone = require('keystone'),
  async = require('async'),
  _ = require('underscore');

exports = module.exports = function(req, res) {
  var locals = res.locals,
    view = new keystone.View(req, res);
  locals.memberId = req.params.member;
  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = 'member';


  //load the members
  var Members = keystone.list('Members');
  // var view, etc. as in the existing screens
  view.on('init', function(next) {
    Members.model.find().sort('name').exec(function(err, members) {

      var memberData = _.map(members, function(member){

        if (member._id == locals.memberId){
          locals.member = member;
        } else{

        }
      });
      locals.members = members;

      next();
    });
  });

  view.render('member');

};
