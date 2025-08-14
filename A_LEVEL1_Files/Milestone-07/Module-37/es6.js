//Template String

const student = {
	name: "Saib Khan",
	age: 23,
	movies: ["king-khan"],
};

const about = `My name is ${student.name} age is ${student.age}`;

console.log(about);

const arrowFunction = () => {};

const number = (num) => num + 44;
console.log(number(23));

//spread operator
