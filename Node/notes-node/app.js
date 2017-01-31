console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var fA = _.uniq(['Julio', 1, 'Julio', 1, 2, 3, 4]);
console.log(fA);

// console.log(_.isString(true));
// console.log(_.isString('Julio'));

//console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
