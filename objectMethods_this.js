'use strict';

let user = {
	name: 'Jhon',
	age: 30,
}

user.sayHi = function() {
	alert('Hello')
}

user.sayHi();
console.log(user);

function sayBy() {
	alert('Goodby')
}

user.sayBy = sayBy;
user.sayBy();

user = {
	name: 'Jack',
	sayTry() {
		alert('Try')
		alert(this.name)
	}
}
user.sayTry();
console.log(user);

let newUser = {
	name: 'Klark',
	age: 30,
	sayName() {
		alert(newUser.name)
	}
}

newUser.sayName()

let myUser = {name: 'Sara'};
let admin = {name: 'Roy'}

function sayThisName() {
	alert(this.name);
}

myUser.f = sayThisName;
admin.f = sayThisName;

myUser.f();
admin.f();
myUser['f']();
admin['f']();

let userOne = {
	lastName: 'Gray',
	sayLastName() {
		let arrow = () => alert(this.lastName);// Стрелочная функция
		arrow();
	} 
}
userOne.sayLastName();

function tryThis() {
	return {
		name: 'Collen',
		ref() {
			return this
		}
	}
}

let userTryThis = tryThis();
alert(userTryThis.ref().name);// Collen


let calculator = {
	read() {
		this.a = +prompt('Insert a', 0);
		this.b = +prompt('Insert b', 0);
	},
	sum() {
		return this.a + this.b
	},
	mul() {
		return this.a * this.b
	},

}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder
	.up()
	.up()
	.down()
	.showStep()
	.down()
	.showStep(); // показывает 1 затем 0