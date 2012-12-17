var dbConfig = require('../../config/dbConfig.js');

var conString = dbConfig.development.url;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('conection opened!!!!!!');
});


var userSchema = new Schema({
    provider: String,
    id: String,
    username: String,
    displayName: String,
    emails: [{value: String}],
    _raw: [mongoose.Schema.Types.Mixed],
    _json: {id: String,
    		services: String,
    		url: String,
    		description: String,
    		thumbnail_url: String,
    		location: String,
    		name: String,
    		handle: String,
    		email: String,
    		work: String,
    		gravatar: String
    		}
});

 
module.exports = userSchema;
//var userIns = new user();

//module.exports = users;