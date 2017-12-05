var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Recipe = require('./api/models/cuttingEdgeModel'),
  bodyParser = require('body-parser');

var routes = require('./api/routes/cuttingEdgeRoutes');
routes(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cuttingedgedb', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('cutting-edge RESTful API server started on: ' + port);