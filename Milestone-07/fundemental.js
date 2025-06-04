const student = {
	name: "Sakib Khan",
	age: 32,

	movies: ["King khan", "Dhakr Mastan"],
};

const about = ` My name is ${student.name}  and movies liked  ${student.movies[0]}`;

console.log(about);

const employee = {
	ide: "VS-CODE",
	designation: "developer",
	language: ["html", "css", ""],
	specifications: {
		height: 66,
		weight: 54,
		drink: "water",
	},
};

const { drink } = employee.specifications;

console.log(drink);

const keys = Object.keys(employee);
console.log(keys);
const values = Object.values(employee);
console.log(values);

const numbers = [12, 32, 34, 12, 45];
numbers.forEach;
