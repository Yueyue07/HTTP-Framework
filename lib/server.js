const Router = require('./router');
const http = require('http');
const response = require('./response');
var router = new Router();

module.exports= {
  router: router,
  server: function(req_res) { return http.createServer(req_res);},
  res: response
};
