var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Gokul'); //write a response to the client
  res.end(); //end the response
}).listen(8000); //the server object listens on port 8080