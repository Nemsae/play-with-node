// OS Information _______________________________________________________

// const os = require('os');
// const readline = require('readline');
//
//
// // Operating System Script
// function osInfo () {
//   let osObj = os.cpus();
//   let model = osObj[0].model;
//   console.log('System Info: ',model);
//   console.log('OS Architecture: ',os.arch());
// }

// osInfo();




// Interactive CLI Script_______________________________________________________

// function jayCLI () {
//
//   const rl = readline.createInterface({ //
//     input: process.stdin,
//     output: process.stdout,
//   });
//
//   rl.question('What color is my underpants?', (answer) => {
//     if (answer !== 'pink') {
//       console.log('Pearl Pink. The true color of a 21st century gentleman. '+answer+'??... Im at a loss of words.');
//     } else {
//       console.log('Stop going through my drawers.')
//     }
//   })
//
//   rl.on('SIGINT', () => {
//     rl.question('You would leave me alone in this horrid black box of nothingness?', (answer) => {
//       if (answer.match(/^y(es)?$/i)) {
//         console.log('Rude Cunt.')
//         rl.pause();
//       } else if(answer.match(/^n(o)?$/i)) {
//         console.log('Cheers, let me go grab us a few drinks.');
//         rl.prompt();
//       } else {
//         console.log('English please?');
//         rl.prompt();
//       }
//     });
//   });
//
//   rl.on('line', (input) => {
//     console.log(`Received: ${input}`);
//   });
//
// }

// jayCLI();







// File System_______________________________________________________

// function fsJay() {
//
//   const fs = require('fs');
//   const path = require('path');
//
//   // fs.access(path.resolve('readme.md'), (err) => {
  //   if (err) {
  //     if (err.code === "ENOENT") {
  //       console.error('myfile does not exist');
  //       return;
  //     } else {
  //       throw err;
  //     }
  //   }

    // let p = '../'
    // let p = path.resolve('test.js')
    // console.log(p)

    // fs.readdir(p, (err, files) => {
    //   if (err) {
    //     throw err;
    //   }
    //
    //   files.map(file => {
    //     return path.join(p, file);
    //   }).filter(file => {
    //     return fs.statSync(file).isFile();
    //   }).forEach(file => {
    //     console.log('%s (%s)', file, path.extname(file));
    //   });
    // })

    // fs.readFile(path.resolve('readme.md'), (err,buffer) => {
    //   console.log('err:', err);
    //   // console.log('buffer:', buffer);
    //   console.log('buffer.toString():', buffer.toString());
    //
    //   //buffer is raw binary data
    // })

  // })
// }
  // fsJay();






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
const http = require('http');
const PORT=8080;
//
//
// //HTTP SERVER SETUP
//
// function handleRequest(request, response){
//     response.end('It Works!! Path Hit: ' + request.url);
// }
//
// let server = http.createServer(handleRequest);
//
// server.listen(PORT, function(){
//     console.log("Server listening on: http://localhost:%s", PORT);
// });

//___________________________

var options = {
  host: 'www.google.com',
  port: 8080,
  path: './index.html',
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();


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
