import React from "react";

// const Todo = (props) => {
// 	console.log(props);

// 	const { isDone } = props;

// 	if (isDone) {
// 		return <h1>ISdONE True</h1>;
// 	}
// };   Conditional Rendering-01
// const Todo = (props) => {
// 	console.log(props);

// 	const { isDone } = props;

// 	if (isDone) {
// 		return <h1>ISdONE True</h1>;
// 	}
// 	return <h1>IS done False</h1>;
// }; //Conditional Rendering -02
// const Todo = (props) => {
// 	console.log(props);

// 	const { isDone } = props;
// 	return <li>{isDone ? "True" : "False"}</li>;
// };  //Conditional Rendering-03
const Todo = (props) => {
	console.log(props);

	const { isDone } = props;
	return <li>{isDone ? "True" : "False"}</li>;
};

export default Todo;
