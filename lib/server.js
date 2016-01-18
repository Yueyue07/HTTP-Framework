const Router = require('./router');
const http = require('http');
const response = require('./response');
const postRequest = require('./postRequest');
var router = new Router();

module.exports= {
  router: router,
  server: function(req_res) { return http.createServer(req_res);},
  res: response,
  postRequest: postRequest
};
