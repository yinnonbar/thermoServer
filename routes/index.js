var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thermostat/getMode', function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.send('Auto');
})

router.get('/thermostat/getTemperature', function(req, res, next) {
  let temperature = Math.floor(Math.random() * 100) - 30;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.send(''+temperature);
})

router.get('/thermostat/getHeaterStatus', function(req, res, next) {
  let randGen = Math.floor(Math.random() * 10);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  if (randGen % 2 === 0){
    res.send('On');
  }else {
    res.send("Off")
  }
});

router.get('/environment/getSensorData', function(req, res, next) {
  let sensorNum = req.query.sensorNum;
  console.log("num is: " + sensorNum);
  let temperature = Math.floor(Math.random() * 100) - 30;
  let humidity = Math.floor(Math.random() * 100);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ temperature: temperature,  humidity: humidity}));
});


module.exports = router;
