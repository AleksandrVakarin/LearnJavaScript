// 'use strict';
// // two ways:
// //1:
// let obj = new Object();
// //2:
// let user = {
// 	name: 'Raen',
// 	age: 25,
// 	'live Russia': true,
// };

// alert(user.name);
// alert(user.age);
// alert(user['live Russia']);
// alert(user);

// user.isAdmin = true;
// delete user.age;
// delete user['live Russia'];

// user.name = 'Tray';

// alert(user.name);
// alert(user.age);
// alert(user['live Russia']);

// let key = 'live Other location';
// user[key] = true;
// alert(user['live Other location']);//true

// let userPrompt = {
// 	name: 'Jack',
// 	age: 30,
// }

// let keyPrompt = prompt('What do you want to know about user?', 'name');
// alert(userPrompt[keyPrompt]);


// //create property:
// let fruit = prompt('Which fruit need to by?', 'apple');
// let bag = {
// 	[fruit]: 5,
// }
// alert(bag.apple);

// let otherFruit = 'apple';
// let otherBag = {
// 	[otherFruit + 'Computer']: 7,
// }
// alert(otherBag.appleComputer);

// let secondUser = {
// 	name,// the same that name: name,
// 	age:35,
// }

// // can use reserved words
// let secondObj = {
// 	let: 1,
// 	for: 4,
// 	return: 5,
// 	0: 'test',
// }

// alert(secondObj.let + secondObj.for + secondObj.return + secondObj[0]);

// // check exist property:
// alert('name' in user);
// alert('something' in user);


// let thirdObj = {
// 	test: undefined,
// }
// alert('test' in thirdObj); //true


// // cycle for:
// let thirdUser = {
// 	name: 'Raly',
// 	age: 32,
// 	isAdmin: true,
// }
// for (let key in thirdUser) { //let key - create in cycle for
// 	alert(key);
// 	alert(thirdUser[key]);
// } 

// // Следуют в порядке возрастания
// let phoneCodes = {
// 	'49': 'Germany',
// 	'41': 'Shuizard',
// 	'44': 'Greatebrit',
// 	'1': 'USA',
// }
// for (let code in phoneCodes) {
// 	alert(code);
// }

// // Следуют в порядке создания
// let phoneCodesTwo = {
// 	'+49': 'Germany',
// 	'+41': 'Shuizard',
// 	'+44': 'Greatebrit',
// 	'+1': 'USA',
// }
// for (let code in phoneCodesTwo) {
// 	alert(+code);
// }

let userObj = {}

userObj.name = 'John';
userObj.surname = 'Smith';
alert(userObj.surname);
userObj.name = 'Pete';
alert(userObj.name);
delete userObj.name;
alert(userObj.name);


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
	for (let key in obj) {
		return true;
	}
	return false;
}

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}

alert(salaries.John + salaries.Ann + salaries.Pete)

let sum = 0;

for (let key in salaries) {
	sum += salaries[key];
}
alert(sum);


let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// for (let key in menu) {
// alert(key);
// }

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
}

alert(menu.width);