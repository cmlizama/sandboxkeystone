var keystone = require('keystone'),
  Types = keystone.Field.Types;

var About = new keystone.List('About');

About.add({
  bio: {type: Types.Textarea}
});


About.register();