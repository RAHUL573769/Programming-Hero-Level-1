import "./App.css";
import Count from "./Count";
import Team from "./Team";
import Users from "./Users";

function App() {
	function handleClick() {
		alert("Clicked");
	}
	// function handleClick2() {
	// 	alert("Clicked");
	// }

	function addToFive(number) {
		return console.log(number + 5);
	}
	return (
		<>
			<h1>React Core Concepts 2</h1>
			<Count></Count>
			<Team></Team>
			<Users></Users>
			<button onClick={() => handleClick()}>Click ME</button>
			<button onClick={() => addToFive(5)}>Click ME</button>
			<button
				onClick={function handleClick() {
					alert("Clicked");
				}}
			>
				Click ME
			</button>
		</>
	);
}

export default App;
