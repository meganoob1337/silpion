var express = require('express');
var app = express();
var fs = require('fs');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/', function(req, res){
    var body = "";
    req.on("data", function (data) {
        body += data;
    });
    req.on("end", function() {
        console.log(JSON.parse(body));
        fs.writeFile("received_forms/"+ new Date().toString() + ".json", body, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });

        res.json({ message: 'goodbye'})
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
