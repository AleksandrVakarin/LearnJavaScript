'use strict';

let msc = 1e-6; 
console.log(msc); //0.000001

let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(36));

console.log(123456..toString(36));
console.log((123456).toString(36));

let numb = 1.23456;
console.log(Math.round(numb * 100) / 100); //1.23

let sum = 0.2 + 0.1;
console.log(+sum.toFixed(2)); //0.3

console.log(parseFloat('12.34em')) //12.34
console.log(parseInt('100px')) //100


let a = +prompt('Insert firs number', 0);
let b = +prompt('Insert second number', 0);

console.log((a + b).toFixed(1));

let number = 6.35;
console.log( number.toFixed(2) ); // 6.3

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

console.log(`Число: ${readNumber()}`);


function random(min, max) {
	return min + Math.random() * (max - min);
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log( randomInteger(1, 3).toFixed() );
console.log( randomInteger(1, 3).toFixed() );
console.log( randomInteger(1, 3).toFixed() );