// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// timestamp API endpoint
app.get("/api/:date?", function(req, res) {
  // Store request param in a variable
  let getDate = req.params.date;
  let date = new Date(getDate)

  // Check if date provided in the endpoint
  if (!getDate) {
    // If not provided get current date
    date = new Date()
  } else {
    // if date provided check if its in unix format
    if (isNaN(Date.parse(date))) {
      date = new Date(getDate * 1);
    }
  }

  // Check if date is valid
  if (date == "Invalid Date") {
    res.json({
      error: "Invalid Date"
    })
  } else {
    // Format date
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  }
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
