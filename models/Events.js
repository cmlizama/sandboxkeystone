var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Events = new keystone.List('Events');

Events.add({
  name: {type: String, required: true},
  date: {type: Types.Text},
  blurb: {type: Types.Textarea},
  eventbriteLink:{type: Types.Url},
  image: {type:Types.CloudinaryImage}
});


Events.register();