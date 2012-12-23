
var mongoose = require('mongoose');
var userSchema = require('../models/userSchema.js');
action('landingPage', function () {
	


	if(req.user == undefined){
	//console.log("************provider object "+JSON.stringify(req.user) );

	render('landing.ejs', {user: req.user, title: 'Envwe & Get Envweed!'}  );
	} else {

//new userModel(req.user);
var userObj = mongoose.model('userObj', userSchema);
var userMod = new userObj(req.user);
//console.log('&&&&&&&&&&&&'+ req.user);
//console.log('&&&&&&&&&&&&'+ userMod);
userMod.save(function(error, result){
	if(error){
		console.console.log('error while saving data'+error);
	} else{
		console.log('data saved succeff'+result);
	}
});
	redirect('/home');
	}
   //console.log(req.session);
   
   

});