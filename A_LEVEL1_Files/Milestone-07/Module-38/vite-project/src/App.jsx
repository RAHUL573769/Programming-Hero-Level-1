import Actor from "./Actor";
import "./App.css";
import Todo from "./Todo";

function Person() {
	const age = 25;

	const money = 30;
	return (
		<h3>
			My age is {age} and Money {money}
		</h3>
	);
}
function Developer(props) {
	// console.log(...props);
	return (
		<h1>
			I am a Developer My name is {props.name} and Device {props.device}
		</h1>
	);
}
function App() {
	const names = ["Rahul", "Rajaaja", "Singha"];
	const singers = [
		{ name: "Dr.Evan", age: 20 },
		{ name: "Dr.Evan-1", age: 200 },
	];
	return (
		<div className='person'>
			<h1>Vite + React</h1>
			<Person></Person>
			<Todo task={"myTask"} isDone={false}></Todo>
			<Developer name='Rahul Rudra' device='Laptop'></Developer>
			{/* {names.map((name) => (
				<Actor name={name}></Actor>
			))} */}
			{singers.map((singer) => (
				<Actor singer={singer}></Actor>
			))}
		</div>
	);
}

export default App;
