

var http = require('http');
var req = http.get('http://localhost:3000/hr', function(response) {
    var buffer = '';
    response.on('data', function(chunk) {
        buffer += chunk;
    });



    response.on('end', function() {
        console.log(buffer);
    });
   });
    
    req.on('error', function(err) {
        console.log(err);
    });
    
   
    
    
    





/**
 * 
var net = require('net');
var readline = require('readline');

//Read line interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Run Recursively user input until user input is 'bye'
var readMessage = function(client) {
	rl.question("Enter Message: ", function (line){
			client.write("From " + clientId + ": " + line);
			if (line == "bye") {
                            console.log('Invalid request');
                            client.end();
                        }
				
			else
				readMessage(client);
	});
};

//Connect to port on server
var client = net.connect({port:3000},
	function(){
		console.log("Connected to server");
		//readMessage(client);
	});

//Listen for event disconnect
client.on('end', function(){
	console.log("Client disconnected...");
	return;
});

//Listen for event data
client.on('data', function(data){
	console.log("\n Received:", data.toString());	
});


**/


















	