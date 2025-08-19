const addThreeNumbers = (num1, num2, num3) => {
	const add = num1 + num2 + num3;
	return add;
};

const multiplyThreeNumbers = (num1, num2, num3) => {
	const multiply = num1 * num2 * num3;
	return multiply;
};

const calculate = { addThreeNumbers, multiplyThreeNumbers };
export default calculate;
