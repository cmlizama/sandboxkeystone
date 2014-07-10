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
    Members.model.find().exec(function(err, members) {

      var memberData = _.map(members, function(member){

        if (member._id == locals.memberId){
          locals.member = member;
        } else{

        }
      });
      locals.members = members;
      // console.log('memberData',memberData)
      // locals.member = memberData;

      next();
    });
  });

  view.render('member');

};

  // Load other posts
  // view.on('init', function(next) {

  //   var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

  //   q.exec(function(err, results) {
  //     locals.data.posts = results;
  //     next(err);
  //   });

  // });