functions in js are first-class . it means you can use them like any other type like string or number.
ex: you can pass them as variables or put them in an array 


function expression : a block of code that resolved as a value
ex : 
const myFunction = function ( ) {
	console.log(‘in an anonymous function without name but resolved as a values')
}

——————————————————————————————————————————————————————————————————————————————————————————————————————
var obj = {
	name : ‘john’,
	greeter : function (param) {
		console.log(‘hello ‘ + this.name);
	}
}

obj.greeter() // only can pass parameters in parentheses
obj.greeter.call({name:jane},param1,param2)  // first object that pass to function will replace its own keys instead of this of obj , then pass params in sequence
obj.greeter.apply({name:jane},[param1,param2])  // first object that pass to function will replace its own keys instead of this of obj , then pass params in an array
