var http = require("http");

http.createServer(function(request, response) {
  console.log("Request received.");
  response.writeHead(200, { "content-Type":  "text/plain" });
  response.write("Hello World");
  response.end();
}).listen(8888);

console.log("Server has started.");
