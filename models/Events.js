var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Events = new keystone.List('Events');

Events.add({
  title: { type: Types.Text},
  date: {type: Types.Date},
  blurb: {type: Types.Textarea},
  eventbriteLink:{type: Types.Url},
  image: {type:Types.CloudinaryImage}
});


Events.register();