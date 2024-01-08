'use strict';

function User(name) {
	this.name = name;
	this.isAdmin = false;
}

let user = new User('Jack');

console.log(user.name);
console.log(user.isAdmin);


let userOne = new function() {
	this.name = 'Grag';
	this.age = 30;
	this.isAdmin = true;
}

console.log(userOne)

function UserTwo() {
	this.name = 'Roy';
	return {
		name: 'Sally'
	}
}

console.log( new UserTwo().name )

function UserThree(name) {
	this.name = name;

	this.sayName = function() {
		alert('my name ' + this.name)
	}
}

let john = new UserThree('John');
john.sayName();


function A() {
	this.name = name;
}
function B() {
	this.name = name;
}

let a = new A('a');
let b = new B('a');

alert( a == b ); // false

let obj = {};

function C() {
	return obj
}

function D() {
	return obj
}

alert( new C() == new D());// true

function Calculator() {
	this.read = function() {
		this.a = +prompt('Insert a', 0);
		this.b = +prompt('Insert b', 0);
	}
	this.sum = function() {
		return this.a + this.b;
	}
	this.mul = function() {
		return this.a * this.b;
	}

}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum());
alert( "Mul=" + calculator.mul());


function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		this.value += +prompt('Insert number', 0)
	}
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений