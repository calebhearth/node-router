var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log(request.method, request.url);
    response.writeHead(200, { "content-Type":  "text/plain" });
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);

  console.log("Server has started.");
}

exports.start = start;

