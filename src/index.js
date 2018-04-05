var util = require('./util');
var f1 = require('./vendor1');
var f2 = require('./vendor2');

console.log(util.fix('1234') + ':' + f1() + ':' + f2());

