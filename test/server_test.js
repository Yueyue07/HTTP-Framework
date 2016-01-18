const Router = require(__dirname + '/../lib/router');
const http = require('http');
const server = require(__dirname + '/../lib/server').server;
const response = require(__dirname + '/../lib/response').buildResponse;
var router = new Router();

router.get('/test', response({msg: 'test from get'}));

router.put('/test', response({msg: 'test from put'}));

router.post('/test', response({msg: 'test from post'}));

router.patch('/test', response({msg: 'test from patch'}));

router.delete('/test', response({msg: 'test from delete'}));

module.exports = server(router.route()).listen(4000, () => {
  console.log('server up');
});
