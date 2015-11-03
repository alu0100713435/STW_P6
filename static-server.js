var static = require('express');

var fileServer = new static.Server('./');

console.log("Visit http://10.6.128.88:8080/index.html");
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);