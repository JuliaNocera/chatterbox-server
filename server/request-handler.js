var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': 'application/json'
};

var messages = [
  {
    username: 'JMMJ',
    text: 'hello',
  }
];

module.exports = function(request, response) {

  //console.log("Serving request type " + request.method + " for url " + request.url);
  // We need to deal with the client request
  //console.log('THIS IS THE REQUEST', request);
  var statusCode = 200;

  if(request.method === 'GET'){
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify('hello world'));
  } else if (request.method === 'POST'){
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify('hello world'));    
  } else if (request.method === 'OPTIONS'){
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify('hello world'));
  }
}    
  


