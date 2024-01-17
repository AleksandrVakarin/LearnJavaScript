'use strict';

let id = Symbol('id');

let id_1 = Symbol('id');
let id_2 = Symbol('id');
console.log( id_1 == id_2);

alert(id.toString());

alert(id.description); // id

let user = {
	name: 'Viktor'
}

let id_3 = Symbol('id')

user[id_3] = 1;

console.log(user[id_3])

let id_4 = Symbol('id');

let userTwo = {
	name: 'Rik',
	[id_4]: 4,
}

console.log(userTwo);

let clone = Object.assign({}, userTwo);
console.log(clone[id_4])


let id_5 = Symbol.for('id');
let id_5Again = Symbol.for('id');
console.log(id_5 == id_5Again);

let symbol_1 = Symbol.for('name');
let symbol_2 = Symbol.for('id');

console.log(Symbol.keyFor(symbol_1));
console.log(Symbol.keyFor(symbol_2));

let globaSymbol = Symbol.for('lastName');
let localSymbol = Symbol('age');

console.log(Symbol.keyFor(globaSymbol));
console.log(Symbol.keyFor(localSymbol));
console.log(localSymbol.description);

