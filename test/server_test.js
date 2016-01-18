const Router = require(__dirname + '/../lib/router');
const http = require('http');
const server = require(__dirname + '/../lib/server').server;

var router = new Router();
router.get('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from get'}));
  res.end();
});

router.put('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from put'}));
  res.end();
});

router.post('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from post'}));
  res.end();
});

router.patch('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from patch'}));
  res.end();
});

router.delete('/test', function(req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({msg: 'test from delete'}));
  res.end();
});

module.exports = server(router.route()).listen(4000, () => {
  console.log('server up');
});
