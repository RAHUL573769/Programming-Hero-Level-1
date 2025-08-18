import Counter from "./Counter/Counter";
import Team from "./Team/Team";

function App() {
	const handleClick1 = () => {
		console.log("Handle Click");
	};
	const handleClick2 = () => {
		console.log("Handle Click");
	};
	const handleClick3 = (data) => {
		console.log("Handle Click", data);
	};

	return (
		<>
			<h1>Vite + React</h1>

			<button onClick={handleClick1}>Click Me Button 1</button>
			<button onClick={() => handleClick2()}>Click Me Button 1</button>
			<button onClick={() => handleClick2()}>Click Me Button 1</button>
			<button onClick={() => handleClick3(5)}>Click Me Button 1</button>
			<Counter></Counter>
			<Team></Team>
		</>
	);
}

export default App;
