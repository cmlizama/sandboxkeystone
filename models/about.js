var keystone = require('keystone'),
  Types = keystone.Field.Types;

var About = new keystone.List('About');

About.add({
  name: {type: String, required: true},
  bio: {type: Types.Textarea},
  email: {type: Types.Email},
  phone_Number: {type: Types.Text},
  address: {type: Types.Textarea}
});


About.register();