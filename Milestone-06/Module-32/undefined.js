// 8 ways to get undefined

// 1.variable that is not intialized;

// 2.function with no return statement;

function sum(a, b, c) {
	const addition = a + b + c;
}

const result = sum(1, 3, 4);

console.log(result);

// 3.parameter that is not passed will give undefined
function sum(a, b, c) {
	const addition = a + b + c;
}

const result1 = sum(1, 3);
console.log(result1);

// 4.if return has nothing on the right side -->will return undefined
function sum(a, b, c) {
	const addition = a + b + c;
	return;
}

const result2 = sum(1, 2, 3);
console.log(result2);

// 5.If object property doesnot exist in the object

// 6 / accessing array elements outside index range;

// 7/deleting elements inside an array

// 8.set a value directly to undefined
