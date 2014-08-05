var keystone = require('keystone'),
  _ = require('underscore');

exports = module.exports = function(req, res) {
    var locals = res.locals,
    view = new keystone.View(req, res);

    locals.section = 'events';
    
  view.render('events');
};