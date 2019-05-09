var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, console.log('Server is listening at 3000'));

const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'checkout_experience'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});