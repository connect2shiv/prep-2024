console.log("======================================================");
const obj = {
    name: 'one',
    greet: function () {
        console.log(`Hi, ${this.name}`);
    }
};

obj.greet();

const obj2 = Object.create(obj);
obj2.name = 'two';
obj2.greet();

console.log(Object.is(obj, obj2));

console.log("======================================================");
// constructor

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes sound`);
}

const dog = new Animal('Dog');
dog.speak();

console.log("======================================================");
// ES6 using class

class Animals {
    constructor (type) {
        this.type = type;
    }

    walk () {
        console.log(`${this.type} walks`);
    }
}

class Dog extends Animals {
    constructor (type, name) {
        super(type);
        this.name = name;
    }

    bark () {
        console.log(`${this.name} barks`);
    }
}

const dog1 = new Dog('Dog', 'Tommy');
dog1.walk();
dog1.bark();

console.log("======================================================");