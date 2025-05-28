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

const array1 = [1, 3, 5, 6, 8];

const sums = array1.reduce(
	(preValue, currentValue) => preValue + currentValue,
	9
);

console.log("12 line", sums);

//scope

const y = 5;

// if (true) {
// 	console.log(y);
// 	let u = 12;
// }

// console.log(u);

//class object

class Animal {
	name = "abc";
	color = "blue";
}

const cat = new Animal();
console.log((cat.name = "Rahuk"));

class Pet {
	name;
	color;

	constructor(petName, petColor) {
		this.name = petName;
		this.color = petColor;
	}

	showInfo() {
		console.log(`My petname is ${this.color}`);
	}
}
const cat1 = new Pet("travis", "white");
console.log(cat1.showInfo());
