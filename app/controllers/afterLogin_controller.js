action('home', function () {
	
	if(req.user == undefined){
	//console.log("************provider object "+JSON.stringify(req.user) );
//console.log("££££££££££££££££££provider object "+req.user.provider);

	redirect('/');
	} else {
	render('home.ejs', {user: req.user, title: 'Welcome '+ req.user.displayName}  );	
	}
   //console.log(req.session);
   
   

});