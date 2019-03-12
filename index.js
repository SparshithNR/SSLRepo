var fs = require('fs'),
    https = require('https'),
    express = require('express');

var port = 4443;

var options = {
    key: fs.readFileSync('./ssl/foo.pem'),
    cert: fs.readFileSync('./ssl/foo.pem'),
};

var app = express();

var server = https.createServer(options, app).listen(port, function(){
  console.log("Express server listening on port " + port);
});
app.use('/tests/', express.static('dist/tests/index.html'));
app.use(express.static('dist'))
