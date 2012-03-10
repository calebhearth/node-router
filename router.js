var regex = /\/([a-z]+)?(\/.*)?/i

function etController(resource) {
  controller = require('./controllers/' + resource);
  return controller;
}

function route(url) {
  if (url == '/') { getController('index').handle() }
  else {
    var resource, querystring = regex.exec(url).slice(1, 2);
    console.log(resource, querystring);
    getController(resource).handle(querystring);
  }
}
exports.route = route;

