import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/tasks', function (req, res, next) {
  res.json(db.getAll());
});

app.post('/tasks', function (req, res, next) {
  const title = req.body.title || '';
  const desc = req.body.desc || '';

  res.json(db.insert(title, desc));
});

app.get('/tasks/:task_id', function (req, res, next) {
  const id = req.params.task_id;

  res.json(db.get(id));
});

app.put('/tasks/:task_id', function (req, res, next) {
  const id = req.params.task_id;
  const title = req.body.title;
  const desc = req.body.desc;

  res.json(db.update(id, title, desc));  
});

app.delete('/tasks/:task_id', function (req, res, next) {
  const id = req.params.task_id;

  res.json(db.remove(id));
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

