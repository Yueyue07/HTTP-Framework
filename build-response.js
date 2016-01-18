function buildResponse(res, statusCode, data, contentType) {
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
  res.writeHead(statusCode, {'Content-Type':
  contentType});
  res.write(dataString);
  return res.end();
}
