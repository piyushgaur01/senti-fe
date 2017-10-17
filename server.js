var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
    console.log('Server is running on port: '+port);
});