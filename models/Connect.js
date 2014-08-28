var keystone = require('keystone'),
  Types = keystone.Field.Types;

var ConnectInfo = new keystone.List('ConnectInfo');

ConnectInfo.add({
  name: {type: String, required: true},
  newsletterLink: {type: Types.Url},
  connectFormLink: {type: Types.Url},
  pitchLead: {type: String},
  pitch: {type: Types.Textarea},
  connectImage: {type: Types.CloudinaryImage}
});

ConnectInfo.register();
