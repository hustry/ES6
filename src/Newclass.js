

class Animal {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    // it's on the prototype
    toString() {
        console.log('name:' + this.name + ',color:' + this.color);
    }
}

var animal = new Animal('dog','white');
animal.toString();

console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); //false
console.log(animal.__proto__.hasOwnProperty('toString')); //true


class Cat extends Animal {

    constructor(action) {
        super('cat','white');
        this.action = action;
    }

    toString(){
        console.log(super.toString());
    }
}

var cat = new Cat('catch');
cat.toString();

console.log(cat instanceof Cat);   //true
console.log(cat instanceof Animal); //true

