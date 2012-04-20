var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    console.log(request.method, request.url);

    route(request.url, response);
  }

  http.createServer(onRequest).listen(8888);

  console.log("Server has started.");
}

exports.start = start;
