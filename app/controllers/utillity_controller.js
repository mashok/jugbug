
action('home', function () {
	
	if(req.user != undefined){
	console.log("************provider object "+req.user._raw);

	//render('home.html', {users: req.user.provider });
	}
   //console.log(req.session);
   render('home.html', {users: "Not yet set" });

});