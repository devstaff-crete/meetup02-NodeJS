'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json()); // support json encoded bodies
app.use(_bodyParser2.default.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/tasks', function (req, res, next) {
  res.json(_db2.default.getAll());
});

app.post('/tasks', function (req, res, next) {
  var title = req.body.title || '';
  var desc = req.body.desc || '';

  res.json(_db2.default.insert(title, desc));
});

app.get('/tasks/:task_id', function (req, res, next) {
  var id = req.params.task_id;

  res.json(_db2.default.get(id));
});

app.put('/tasks/:task_id', function (req, res, next) {
  var id = req.params.task_id;
  var title = req.body.title;
  var desc = req.body.desc;

  res.json(_db2.default.update(id, title, desc));
});

app.delete('/tasks/:task_id', function (req, res, next) {
  var id = req.params.task_id;

  res.json(_db2.default.remove(id));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});