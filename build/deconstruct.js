"use strict";

var foo = {
    bar: 1,
    baz: 2
};

var bar = foo.bar;
var baz = foo.baz;


var tenses = ["me", "you", "he"];

var first = tenses[0];
var second = tenses[1];


console.log('first:' + first + 'second:' + second);

var foo = 2;

var obj = {
    bar: 1,
    foo: foo
};

console.log(obj);

var name = 'Will';
var age = 34;

var weight = 100;
var height = 2;

function calBmi(_ref) {
    var weight = _ref.weight;
    var height = _ref.height;
    var callback = _ref.callback;
    var _ref$max = _ref.max;
    var max = _ref$max === undefined ? 1000 : _ref$max;


    var bmi = weight / Math.pow(height, 2);
    if (bmi > max) {
        console.log('error!');
    }

    if (callback) {
        callback(bmi);
    }
}

calBmi({ weight: weight, height: height, callback: function callback(bmi) {
        console.log("the bmi is " + bmi);
    } });
