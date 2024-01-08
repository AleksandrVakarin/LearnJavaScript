'use strict';

let user = {
	name: 'John',
	lastName: 'Doe',
	age: 30,
	'likes birds': true,
}

console.log(user.name)
console.log(user.age)
console.log(user)

user.isAdmin = true;

delete user.age;

user['likes birds'] = false;

console.log(user['likes birds']);

delete user['likes birds'];
console.log(user);

let key = 'user likes a dog';

user[key] = true;
console.log(user);

let getName = prompt('What do you want to know?', 'name');
console.log(user[getName]);

let fruit = prompt('Which fruit need to by?', 'Apple');

let bag = {
	[fruit + 'Orange']: 5,
}
console.log(bag.AppleOrange);


function createUser(name, age) {
	return {
		name: name,
		age: age,
	}
}
let newUser = createUser('Jack', 33)
console.log(newUser);


let obj = {};

obj.__proto__ = 5;
console.log(obj.__proto__);


console.log(user.noSuchProperty === undefined);

console.log('name' in user);


for (let key in user) {
	console.log(key);
	console.log(user[key]);
}


let codes = {
	"+49": "Германия",
	"+41": "Швейцария",
	"+44": "Великобритания",
	"+1": "США",
}

for (let code in codes) {
	console.log(code);
	console.log(codes[code]);
}


let MyObj = {
	name: 'Roy',
	lastName: 'Varch',
}

MyObj.name = 'Cris'

console.log(MyObj.name)

delete MyObj.name

console.log(MyObj)

let schedule = {}

function isEmpty(obj) {
	for (let key in obj) {
		// если тело цикла начнет выполняться - значит в объекте есть свойства
		return false;
	}
	return true;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
	sum += salaries[key];	
}
console.log(sum);


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in menu) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}	
}
multiplyNumeric(menu);
console.log(menu);