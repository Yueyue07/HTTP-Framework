module.exports.buildResponse = function(data,contentType) {
  return (req,res) => {
    var dataString = data;
    if(!contentType) {
      if (typeof(data) === 'object') {
        contentType = 'application/json';
        dataString = JSON.stringify(data);
      } else if (typeof(data) === 'string') {
        if(data[0] === '<') {
          contentType = 'text/html';
        } else {
          contentType = 'text/plain';
        }
      }
    }
    res.writeHead(200, {'Content-Type':
    contentType});
    res.write(dataString);
    return res.end();
  }
}
