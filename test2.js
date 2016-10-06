
// HTTP Server__________________________________________________________________

// const http = require('http');
// const PORT=8080;

// try 1--------------------------------

// let options = {
//   host: 'http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=64',
//   port: 8080,
//   path:'/index.html'
// };
//
// http.get(options, response => {
//   response.on('data, chunk' => {
//
//   });
// }).on('error', e => {
//   console.log('Got error: ' + e.message);
// });
//
//
// let server = http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write('hello world');
//   response.end();
// }).listen(8080);



//try 2--------------------------------
//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

//___________________________
// const http = require('http');
// const PORT=8080;
console.log('hello');

// var options = {
//   host: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC',
//   port: 8080,
//   path: './index.html',
//   method: 'GET'
// };
//
// console.log('hello2');
//
// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });
//
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
//
// console.log('hello3');
//
// req.write('data\n');
// req.write('data\n');
// req.end();

console.log('hello4');

// let options = {
//   host: 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC',
//   port: 8080,
//   path: '/index.html'
// };
//
// http.get(options, function(resp){
//   resp.on('data', function(chunk){
//     //do something with chunk
//     console.log('Success bitchessss',data)
//   });
// }).on("error", function(e){
//   console.log("Got error: " + e.message);
// });
