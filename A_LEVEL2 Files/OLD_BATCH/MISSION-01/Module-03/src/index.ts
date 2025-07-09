const user: {
	readonly firstName: string;

	middleName: string;
	lastName: string;
} = {
	firstName: "Mezbaul",

	middleName: "Abedin",
	lastName: "Persion",
};

// user.firstName = "New Name";

console.log(user.firstName);

console.log(user.middleName);

//functions

function add6(num1: number, num2: number): number {
	return num1 + num2;
}

const result = add6(12, 6);

console.log(result);

const poorUser = {
	name: "Mezba",

	balance: 0,

	addFunction(balance: number): string {
		return `My new Balance :${this.balance + balance} `;
	},
};

const result1 = poorUser.addFunction(123);

console.log(result1);

const array1: number[] = [1, 34, 5];

console.log(array1);

const userDetails: {
	name: string;
	age: number;
} = {
	name: "Rahul Rudra",
	age: 12,
};

console.log(userDetails.age);

type Student = {
	name: string;
	age: number;
};

const student1: Student = {
	name: "",
	age: 34,
};

type userFunction = (number1: number, number2: number) => number;

// const add: userFunction = number;
