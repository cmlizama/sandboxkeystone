var keystone = require('keystone'),
  Types = keystone.Field.Types;

var Members = new keystone.List('Members', {
  autokey: { from: 'name', path: 'key', unique: true}
});

Members.add({
  name: {type: String, required: true},
  bio: {type: String, required: true}
});

Members.register();


// /**
//  * Gallery Model
//  * =============
//  */

// var Gallery = new keystone.List('Gallery', {
//   autokey: { from: 'name', path: 'key', unique: true }
// });

// Gallery.add({
//   name: { type: String, required: true },
//   publishedDate: { type: Date, default: Date.now },
//   heroImage: { type: Types.CloudinaryImage },
//   images: { type: Types.CloudinaryImages }
// });

// Gallery.register();