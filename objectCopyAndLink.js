'use strict';

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2
		}
	}
}

multiplyNumeric(menu);
console.log(menu);



let user = {
	name: 'Jhon',
}

let Admin = user;
Admin.name = 'Greg';

console.log(user);

console.log(user === Admin)


let clone = {};

for (let key in user) {
	clone[key] = user[key]
}

clone.name = 'Ashley';

console.log(user)
console.log(clone)


let permissionOne = {
	canView: true,
}

let permissionTwo = {
	canEdit: true,
}

Object.assign(user, permissionOne, permissionTwo);
console.log(user);

Object.assign(user, {name: 'Roy'})
console.log(user);

let newClone = Object.assign({}, user);
console.log(newClone)

newClone.size = {
	height: 182,
    width: 50
}

console.log(newClone)