//  Node runs on a server - not in a browser (backend not frontend)
//  The console is the terminal window
// console.log('Hellow World');
// global object instead of window object
// console.log(global);
// Has common core modules
// CommonJS modules instead of ES6 modules
// Missing some apis like fetch

const os = require('os');
const path = require('path');

// const math = require('./math');
// const { add } = require('./math');
const {add, multiply, divide, subtract} = require('./math');

// console.log(math.add(2, 3));
console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(subtract(2, 3));


// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));