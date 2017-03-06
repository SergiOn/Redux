const static = require('node-static');
const file = new static.Server('./');

require('http').createServer(function (request, response) {
    if (!/\./.test(request.url)) {
        request.url = '/';
    }
    file.serve(request, response);
}).listen(8080);