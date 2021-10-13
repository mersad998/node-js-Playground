var EventEmitter = require('events');
var util = require('util');

function customObject (){

    // incase you want to override the context of this customObject to where its wanna inherit from
    // just can add the line below:
    //   EventEmitter.call(this);
    //   or
    //   EventEmitter.apply(this);
    // it can work like `super` key in other languages. the prototype chain will stay complete.


    this.name = 'bla bla bla';
}

util.inherits(customObject,EventEmitter); // now custom object has everything that EventEmitter has
