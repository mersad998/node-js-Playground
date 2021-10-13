var EventEmitter = require('events');
var util = require('util');

function customObject (){
    this.name = 'bla bla bla';
}

util.inherits(customObject,EventEmitter); // now custom object has everything that EventEmitter has
