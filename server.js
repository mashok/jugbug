#!/usr/bin/env node

var app = module.exports = require('railway').createServer();

var passport = require('passport');
// GET /auth/singly/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/singly/callback', passport.authenticate('singly', {
  failureRedirect: '/login',
  successReturnToOrRedirect: '/'
}));

// GET /auth/singly
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Singly authentication will involve
//   redirecting the user to api.singly.com.  After authorization, Singly will
//   redirect the user back to this application at /auth/singly/callback
app.get('/auth/singly', passport.authenticate('singly'));



if (!module.parent) {
    var port = process.env.PORT || 3000
    
    app.listen(port);
    console.log("Railway server listening on port %d within %s environment", port, app.settings.env);
}

