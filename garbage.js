'use strict';

function marry(man, woman) {
	woman.husband = man;
	man.wife = woman;

	return {
		father: man,
		mother: woman,
	}
}

let family = marry({
	name: 'Jhon'
}, {
	name: 'Ann'
});

console.log(family)
