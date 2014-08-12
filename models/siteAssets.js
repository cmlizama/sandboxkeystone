var keystone = require('keystone'),
  Types = keystone.Field.Types;


var SiteAssets = new keystone.List('SiteAssets', {
  autokey: { from: 'name', path: 'key', unique: true}
});

SiteAssets.add({
  name: {type: String, required: true},
  nextArrowDefault: { type: Types.CloudinaryImage},
  nextArrowHover: { type: Types.CloudinaryImage},
  promoLeft: { type: Types.CloudinaryImage},
  promLeftUrl: { type: Types.CloudinaryImage},
  promoRight: { type: Types.CloudinaryImage},
  promRightUrl: { type: Types.CloudinaryImage},
  mainLogo: { type: Types.CloudinaryImage},
  homepageBackground: { type: Types.Select, options: 'barn, wood, homepage' }
});

SiteAssets.register();