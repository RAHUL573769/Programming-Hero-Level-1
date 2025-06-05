import "./App.css";
import Todo from "./Todo";

function App() {
	return (
		<>
			<h1>Vite + React</h1>
			<Todo task='Learn React'></Todo>
			<Person person={{ name: "Rahul Rudra", size: 100 }}></Person>
			<Developer name='Laptop'></Developer>
		</>
	);
}
function Person(props) {
	console.log(props);
	const { name, size } = props.person;
	const age = 25;
	const money = 145;
	return (
		<h1 className='student'>
			{" "}
			I am Person with {age} with {money} Name :{name} Size:{size}
		</h1>
	);
}

function Developer(props) {
	const developerStyle = {
		margin: "20px",
		border: "2px solid red",
	};
	console.log(props);
	return (
		<div style={developerStyle}>
			<h1>I am a Developer and have a {props.name}</h1>
		</div>
	);
}

export default App;
