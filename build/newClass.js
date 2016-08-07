'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(name, color) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.color = color;
    }

    // it's on the prototype


    _createClass(Animal, [{
        key: 'toString',
        value: function toString() {
            console.log('name:' + this.name + ',color:' + this.color);
        }
    }]);

    return Animal;
}();

var animal = new Animal('dog', 'white');
animal.toString();

console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); //false
console.log(animal.__proto__.hasOwnProperty('toString')); //true


var Cat = function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(action) {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cat).call(this, 'cat', 'white'));

        _this.action = action;
        return _this;
    }

    _createClass(Cat, [{
        key: 'toString',
        value: function toString() {
            console.log(_get(Object.getPrototypeOf(Cat.prototype), 'toString', this).call(this));
        }
    }]);

    return Cat;
}(Animal);

var cat = new Cat('catch');
cat.toString();

console.log(cat instanceof Cat); //true
console.log(cat instanceof Animal); //true
