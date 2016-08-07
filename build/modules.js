'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getAge;
exports.another = another;


var name = 'Rainbow';
var age = '24';

exports.name = name;
exports.age = age;
function getAge() {

    return console.log('This is the default method!');
}

function another() {

    return console.log('This is another method!');
}
