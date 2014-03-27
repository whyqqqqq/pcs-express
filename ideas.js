var express = require('express');

var app = express();

var port = 1234;

app.use(express.bodyParser());

app.get('users/:name', function (req, res) {
  res.send(200, 'Hello' + ' ' + req.params.name);
});

app.get('/json', function (req, res) {
  res.json(200, JSON.stringify({"name": "Ben", "age": 30}));
});

app.listen(port, function () {
  console.log("Your app is running on localhost at port:" + port);
});