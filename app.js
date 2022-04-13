
// const helpers = require('./helper.js');
 const { sum } = require('./helper.js');

 const http = require('http');

 const server = http.createServer((req, res) => {

 	res.end("Hello world from node js server updated");

 });


 server.listen(3000)

// const total = helpers.sum(10,200);
const total = sum(30,70)

console.log("Total: ",total);


