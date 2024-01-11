'use strict';

let user = {};

console.log(user?.address?.street); // undefined without error

let html = document.querySelector('.element')?.innerHtml; // will undefined if there is no element


let userTwo = null;

console.log(userTwo?.address);
console.log(userTwo?.address.street);

let userThree = null;

let x = 0;

userThree?.sayHi(x++); // there is no "user" so execution doesn't reach the sayHi and x++ call
console.log(x); // 0


let userAdmin = {
	admin() {
		console.log('I am admin');
	}
}

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing


let key = 'firstName';

let userFour = {
	firstName: 'Jhon',
}

let userFive = null;

console.log(userFour?.[key]); // Jhon
console.log(userFive?.[key]); // undefined

delete user?.name;