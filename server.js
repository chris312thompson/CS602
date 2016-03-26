/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');

var server = http.createServer(function(request, response) {
    var headers = request.headers;
    console.log(headers);
    response.write(headers);
    response.end();
});


server.listen(3000, function() {
    console.log('listening...');
});


