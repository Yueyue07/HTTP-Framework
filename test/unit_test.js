const expect = require('chai').expect;
const Router = require(__dirname + '/../lib/router.js');

describe('Router', () => {
  it('should be able to create a router with routes', () => {
    var router = new Router();
    expect(router).to.have.property('routes');
    expect(router.routes).to.be.an('object');
  });

  it('should be able to register a get request', () => {
    var router = new Router();
    var testReq = {method:'GET', url: '/test'};
    var called = false;
    router.get('/test',(req,res) => {
      called = true;
      expect(req.method).to.equal('GET');
      expect(req.url).to.equal('/test');
      expect(res).to.equal(null);
    });
    router.route()(testReq,null);
    expect(called).to.equal(true);
  });

  it('should be able to register a post request', () => {
    var router = new Router();
    var testReq = {method:'POST', url: '/test'};
    var called = false;
    router.post('/test',(req,res) => {
      called = true;
      expect(req.method).to.equal('POST');
      expect(req.url).to.equal('/test');
      expect(res).to.equal(null);
    });
    router.route()(testReq,null);
    expect(called).to.equal(true);
  });

  it('should be able to handle 404', () => {
    var called = 0;
    var testRes = {
      writeHead: function(statusCode,headers){
        expect(statusCode).to.equal(404);
        expect(headers['Content-Type']).to.equal('application/json');
        called++;
      },
      write: function(msg) {
        expect(msg).to.equal(JSON.stringify({msg:'page not found'}));
        called++;
      },
      end: function() {
        called++;
      }
    };

    var router = new Router();
    router.route()({method:'GET',url: ''}, testRes);
    expect(called).to.equal(3);

  });

});
