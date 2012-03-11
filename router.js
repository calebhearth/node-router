var path = require('path');

var controllersPrefix = './controllers/';
var notFoundPath = controllersPrefix + '404';

function getController(resource) {
  var controllerPath = controllersPrefix + resource;
  console.log(controllerPath);
  console.log(resource);
  var controller;
  if (path.existsSync(controllerPath + '.js')) {
    console.log("Found controller at", controllerPath);
    controller = require(controllerPath);
  }
  else {
    console.log("Didn't find controller at", controllerPath);
    console.log("Gonna serve the controller at", notFoundPath);
    controller = require(notFoundPath);
  }
  return controller;
}

function route(url) {
  if (url == '/') { getController('index').handle(); }
  else {
    parts = url.split('/');
    console.log(parts);
    // first part is the resource name
    resource = parts[1];
    // the rest is for the controller to deal with
    queryParts = parts.slice(2);
    console.log("resource:", resource);
    console.log("query:", queryParts);
    getController(resource).handle(queryParts);
  }
}
exports.route = route;
