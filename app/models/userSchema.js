
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;


console.log('in Schema Function');
var userSchema = new Schema({
    provider: String,
    id: String,
    username: String,
    displayName: String,
    emails: [{value: String}],
    _raw: [mongoose.Schema.Types.Mixed],
    _json: {id: String,
    		services: [mongoose.Schema.Types.Mixed],
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


//mongoose.model('userObj', userSchema);

module.exports = userSchema;



//module.exports = userModel;