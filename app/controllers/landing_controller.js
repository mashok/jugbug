
var mongoose = require('mongoose');
var userSchema = require('../models/userSchema.js');
action('landingPage', function () {
	


	if(req.user == undefined){
	//console.log("************provider object "+JSON.stringify(req.user) );

	render('landing.ejs', {user: req.user, title: 'Envwe & Get Envweed!'}  );
	} else {
var userObj = mongoose.model('userObj', userSchema);

var userMod = new userObj(req.user);
//console.log('&&&&&&&&&&&&'+ req.user);
console.log('&&&&&&&&&&&&'+ userMod);

	redirect('/home');
	}
   //console.log(req.session);
   
   

});