var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 2600;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static(__dirname + '/public'));


 app.listen(port, function() {
    console.log('hello server started at ' + port);
});

