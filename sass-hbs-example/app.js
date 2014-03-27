
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

//the modules we need to be fancy
var sass = require('node-sass');
var handlebars = require('handlebars');
var consolidate = require('consolidate');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//extra step to do handlebars instead of jade
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

app.use(express.favicon());
app.use(express.logger('dev'));
//our previous example used bodyParser instead of the following two lines
app.use(express.json());
app.use(express.urlencoded());

app.use(express.methodOverride());
app.use(app.router);
//order of middleware matters
//Extra step to use node-sass, turn it into middleware and get the options we need
app.use(sass.middleware({
  src: __dirname + '/public',
  dest: __dirname + '/public',
  debug: true,
  outputStyle: 'compressed'
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//routes
app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
