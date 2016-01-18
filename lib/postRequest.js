module.exports = function() {
  return (req,res) => {

    var dataString = '';
    req.setEncoding('utf8');
    req.on('data', function(data) {
      dataString += data;
    });
    req.on('end',function(){
      res.writeHead(200, {'Content-Type':'application/json'});
      res.write(JSON.stringify(dataString));
      res.end();
    });

  };
};
