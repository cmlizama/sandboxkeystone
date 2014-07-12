var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Members = new keystone.List('Members', {
  autokey: { from: 'name', path: 'key', unique: true}
});

Members.add({
  name: {type: String, required: true},
  bio: {type: Types.Textarea},
  link_to_twitter: {type: Types.Url},
  link_to_facebook:{type: Types.Url},
  link_to_eventbrite: {type: Types.Url},
  link_to_instagram: {type: Types.Url},
  link_to_pinterest: {type: Types.Url},
  image: { type: Types.CloudinaryImage },
  color: {type: Types.Color}

});

Members.register();