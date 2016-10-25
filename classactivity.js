// include http module
var http = require('http');

// declare port
var PORTONE = 7000;
var PORTTWO = 7500;


// function to handle
function handleNice(request, response){
  response.end('Some nice stuff!');
};

function handleMean(request, response){
  response.end('Bad stuff');
};

var serverOne = http.createServer(handleNice);
var serverTwo = http.createServer(handleMean);

serverOne.listen(PORTONE, function(){
  console.log('Server listening On: http://localhost:%s', PORTONE)
});

serverTwo.listen(PORTTWO, function(){
  console.log('Server listening On: http://localhost:%s', PORTTWO)
});