var EventEmitter = require('events');
var util = require('util');

function customObject (){
    // incase you want to override the context of this customObject to where its wanna inherit from
    // just can add the line below:
    //   EventEmitter.call(this);
    //   or
    //   EventEmitter.apply(this);
    // it can work like `super` key in other languages . it means it can cause to pass the empty `this` object
    // of child object to the constructor of parent object . then execute its own constructor

    this.customProperty = 'bla bla bla';
}

util.inherits(customObject,EventEmitter); // now custom object has everything that EventEmitter has



// ---------------- for Example and understanding better :

function firstObject (){
    this.firstProperty = 'A';
    this.secondProperty = 'B';
};

firstObject.prototype.customFunction = function (){
    console.log(this.firstProperty + ' _ ' + this.secondProperty);
}

function secondObject (){
    // in this position if call person with this, the `myInstance` has the value of firstName and lastName
    // and the customFunction function can log them , else the constructor of person not run at all! so the value of
    // firstName and lastName will stay undefined. and the customFunction function will log : `undefined _ undefined`
    // you can call it like this : person.call(this);

    this.anotherProp = 'C';
}

util.inherits(secondObject, firstObject);

const myInstance = new(anotherObject);

    // customFunction will available from : myInstance.__proto__.__proto__.customFunction();

myInstance.customFunction();