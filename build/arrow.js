'use strict';

// Arrow function

var arr = [1, 2, 3];

var temp = [];

// expression body
arr.map(function (item) {
    return item + 1;
});
arr.map(function (item, index) {
    return item + 1;
});

//statement body
arr.forEach(function (item) {

    if (item === 1) {
        temp.push(item);
    }
});

// bind this
var bob = {
    name: "hustry",
    frends: ['f1', 'f2', 'f3'],
    print: function print() {
        var _this = this;

        this.frends.map(function (item) {
            console.log(_this.name + 'knows' + item);
        });
    }
};
