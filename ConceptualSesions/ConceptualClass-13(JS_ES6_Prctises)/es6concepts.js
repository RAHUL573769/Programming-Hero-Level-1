// primitive data types

// Spread Operator

const number = [1, 2, 34, 5];

const number1 = number;

console.log(number1);

const number3 = [1, 2, 3, 4, 5, 6];

const v = [...number, 123];

console.log(v);

const [a, b, c, d] = number3;

console.log(a);

const person = {
	name: "Hero AlAM",
	age: 23,
	country: "Bangladesh",

	address: {
		zilla: "Rajshai",
		town: "Chittagong",
	},
};

const { age: amrName, address, name } = person;
const { town } = address;

const {
	address: { zilla },
} = person;
// console.log(age);
console.log(town);
console.log(amrName);
console.log(zilla);

const double = (x) => {
	const a = x * 2;
	return a;
};

console.log(double(2));

//array methods
const numbers = [10, 12, 13, 14, 15];

const a1 = numbers.forEach((item) => item * 3);
const a2 = numbers.map((item) => item * 3);

console.log(a1);
console.log(a2);

const x = number.filter((item) => item % 2 === 0);
console.log(x);
