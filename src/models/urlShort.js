const mongoose = require('mongoose');
require('mongoose-type-url');

const urlSchema = new mongoose.Schema({
    urlO: mongoose.SchemaTypes.Url,
    shortUrl:String,
});

module.exports = mongoose.model('UrlS', urlSchema);