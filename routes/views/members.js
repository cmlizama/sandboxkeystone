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
          console.log(members);
        });
      });

      view.render('members');
      console.log('members' + locals) //<- data did not reach here




  
};

  // Load other posts
  // view.on('init', function(next) {
    
  //   var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');
    
  //   q.exec(function(err, results) {
  //     locals.data.posts = results;
  //     next(err);
  //   });
    
  // });