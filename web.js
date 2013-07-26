var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var x  = fs.readFileSync('index.html').toString('utf-8');
    response.send(x);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});