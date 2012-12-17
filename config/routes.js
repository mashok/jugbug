var passport = require('passport');

exports.routes = function (map) {



map.root('landing#landingPage');
map.get('/home','afterLogin#home');

  
};
