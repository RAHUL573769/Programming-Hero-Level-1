function printName() {
	console.log("Print Name");
}
printName();
function printName1(name) {
	console.log(`My name is ${name}`);
}
printName1("Rahul");

function add(x, y) {
	const total = x + y;
	return total;
}

const returnedValue = add(1, 5);

console.log(returnedValue);

function checkEvenOdd(x) {
	if (x % 2 === 0) {
		return "Even";
	} else {
		return "ODD";
	}
}

function add(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		return "thik thak number de";
	} else {
		return x + y;
	}
}

const output = add("2", 3);

console.log(output);

function findLargest(values) {
	let max = values[0];

	for (let i = 1; i < values.length; i++) {
		if (values[i] > max) {
			max = values[i];
		}
		return max;
	}
}
