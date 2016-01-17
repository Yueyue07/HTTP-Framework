module.exports.content = function(input) {
  return (req,res) => {
    if (typeof input === 'object' ){
      res.writeHead(200,{'Content-Type':'application/json'});
      res.write(JSON.stringify(input));
      res.end();
    }

    if(typeof input === 'string'){
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.write(input);
      res.end();
    }

  };
};
