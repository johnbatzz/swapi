const express = require('express')
const app = express()
const port = 3000


app.get('/films', (req, res) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var request = require('request');
  request('https://swapi.dev/api/films', function (error, response, body) {
    res.write(body)
    res.end();
  });
})

app.get('/starships', (req, res) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var request = require('request');
  request('https://swapi.dev/api/starships', function (error, response, body) {
    res.write(body)
    res.end();
  });
})

app.listen(port, function (error) {
  if (error) {
    coonsole.log("Something went wrong", error)
  } else {
    console.log('Server is listening n port ', port)
  }
})
