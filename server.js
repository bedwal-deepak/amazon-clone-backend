var express = require('express');
var morgan = require('morgan');
/*Morgan: is another HTTP request logger middleware for Node.js. It simplifies the process of logging requests to your application. You might think of Morgan as a helper that collects logs from your server,
such as your request logs. It saves developers time because they don’t have to manually create common logs. It standardizes and automatically creates request logs.
Morgan can operate standalone, but commonly it’s used in combination with Winston. Winston is able to transport logs to an external location, or query them when analyzing a problem.*/

var app = express();

//middleware
app.use(morgan('dev')); //to invoke morgan

app.get('/', function(req, res) {
    var name = "Deepak";
    res.json("My name is " + name);
});

app.get('/catname', function(req, res) {
    res.json("batman");
})

app.listen(3000, function(err) {
    if(err) throw err;
    console.log("Server is running");
});