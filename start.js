var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5004));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('index');
});
app.get('/contact', function(request, response) {
  response.render('contact');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
