import "./App.css";

function App() {
	return (
		<>
			<h1>Vite + React</h1>

			<Person></Person>
		</>
	);
}

function Person() {
	const age = 25;
	const money = 145;
	return (
		<h1 className='student'>
			{" "}
			I am Person with {age} with {money}
		</h1>
	);
}

export default App;
