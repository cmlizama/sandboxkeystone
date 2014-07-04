var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Members = new keystone.List('Members', {
  autokey: { from: 'name', path: 'key', unique: true}
});

Members.add({
  name: {type: String, required: true},
  bio: {type: Types.Textarea},
  site: {type: Types.Url},
  image: { type: Types.CloudinaryImage }

});

Members.register();