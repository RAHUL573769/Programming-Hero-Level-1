const fatherName = "Arnold";

let season = "rainy";
season = "winter";

if (fatherName === "Arnold" || season === "rainy") {
	console.log("In first Block");
} else if (fatherName == "Arnold") {
	console.log("In first Block-1");
} else {
	console.log("In second Block");
}

// 3.Array
//index
//length
const array = [78, 23, 67];

// 4.For loop

for (let i = 0; i < array.length; i++) {
	const numbers = array[i];
	console.log(numbers);
}
// 5.Function

function multiply(num1, num2) {
	const result = num1 + num2;
	return result;
}
const output = multiply(1, 2);

console.log(output);
// 6.Object

const student = {
	name: "Saib Khan",
	age: 23,
	movies: ["king-khan"],
};
console.log(student.age);
