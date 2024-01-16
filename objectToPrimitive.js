'use strict';

let user = {
	name: 'Lack',
	money: 1000,

	[Symbol.toPrimitive](hint) {
		alert(`hint: ${hint}`);
		return hint == 'string' ? `{name: ${this.name}}` : this.money;
	}
}

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

let userTwo = {name: 'Jhon'}

alert(user.valueOf() === user); // true

let userThree = {
	name: 'Tack',
	money: 2000,

	toString() {
		return `{name: '${this.name}'}`;
	},

	valueOf() {
		return this.money
	}
}

alert(userThree); // toString -> {name: "Tack"}
alert(+userThree); // valueOf -> 2000
alert(userThree + 1700); // valueOf -> 1700


let userFour = {
	name: 'Colen',

	toString() {
		return this.name;
	}
}

alert(userFour); // Colen
alert(userFour + 500); // Colen500

let obj = {
	toString() {
		return '2';
	}
}

alert(obj * 2); // 4, объект был преобразован к примитиву "2", затем умножение сделало его числом
alert(obj + 2); // 22 ("2" + 2), преобразование к примитиву вернуло строку => конкатенация