var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Members = new keystone.List('Members', {
  autokey: { from: 'name', path: 'key', unique: true}
});

Members.add({
  name: {type: String, required: true},
  bio: {type: Types.Textarea},
  shortBio: {type: String},
  location: {type: String},
  products: {type: String},
  link_to_twitter: {type: Types.Url},
  link_to_facebook:{type: Types.Url},
  link_to_eventbrite: {type: Types.Url},
  link_to_instagram: {type: Types.Url},
  link_to_pinterest: {type: Types.Url},
  image: { type: Types.CloudinaryImage},
  logo: { type: Types.CloudinaryImage},
  color: {type: Types.Color},
  slideshowImage1: { type: Types.CloudinaryImage},
  slideshowImage2: { type: Types.CloudinaryImage},
  slideshowImage3: { type: Types.CloudinaryImage},
  slideshowImage4: { type: Types.CloudinaryImage},
  slideshowImage5: { type: Types.CloudinaryImage},

});

Members.register();