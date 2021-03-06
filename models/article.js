var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
id: {type: Number, required: true},
index: {type: String, required: true},
avaliableStock: {type: Number, required: true}
});

var Model = mongoose.model('Article', ArticleSchema);
module.exports = Model;