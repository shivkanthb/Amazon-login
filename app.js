
var express = require('express');
var path = require('path');
var app = express();
var swig = require('swig');
var request = require('request');
require('dotenv').config()

app.engine('html', swig.renderFile)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.get('/', function(req,res) {
	res.render('index');
});

app.get('/auth', function(req,res) {
    var access_token = req.query.access_token;
    console.log("Access token is :"+access_token);

    var options = {
        url : 'https://api.amazon.com/user/profile',
        headers: {
            'Authorization': 'Bearer '+access_token
        },
        method : 'GET'
    }
    request(options, function(err, response, body) {
        if(err)
            throw err;
        res.send(body);
    });
});


app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
