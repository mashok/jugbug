var express = require('express');
var passport = require('passport');
var SinglyStrategy = require('passport-singly').Strategy;

var SINGLY_APP_ID = process.env.SINGLY_APP_ID || "a82983af9dda46d48324fa931ad13cd8";
var SINGLY_APP_SECRET = process.env.SINGLY_APP_SECRET || "d46d32ebea6cdc42eecdd9e53bb6501e";

var CALLBACK_URL = process.env.CALLBACK_URL || "http://localhost:3000/auth/singly/callback";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Singly profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

// Use the SinglyStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Singly
//   profile), and invoke a callback with a user object.
passport.use(new SinglyStrategy({
    clientID: SINGLY_APP_ID,
    clientSecret: SINGLY_APP_SECRET,
    callbackURL: CALLBACK_URL
  },
  function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's Singly profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Singly account with a user record in your database,
      // and return that user instead.
      console.log(accessToken, refreshToken, profile);

      return done(null, profile);
    });
  }
));








app.configure(function(){
   
		 // make a custom html template
  app.register('.html', {
    compile: function(str, options){
      return function(locals){
        return str;
      };
    }
  });


	var cwd = process.cwd();
    
    app.use(express.static(cwd + '/public', {maxAge: 86400000}));
    app.set('view engine', 'jade');
    app.set('view options', {complexNames: true});
    app.set('jsDirectory', '/javascripts/');
    app.set('cssDirectory', '/stylesheets/');
    app.use(express.bodyParser());
    app.use(express.cookieParser('secret'));
    app.use(express.session({secret: 'secret'}));
    app.use(express.methodOverride());

	  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());

    app.use(app.router);



});

