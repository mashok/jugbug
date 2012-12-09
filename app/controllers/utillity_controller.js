
action('home', function () {
	
	console.log(req.user);

   render('home.html');
});