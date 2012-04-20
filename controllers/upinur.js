function handle(response, queryString) {

  response.writeHead(200, { "content-Type":  "text/plain" });
  response.write("I'm up in your server, reading your queries");
  response.write("You asked me for " + queryString.toString());
  response.end();
}

exports.handle = handle;
