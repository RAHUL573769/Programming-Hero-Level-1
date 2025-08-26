import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import Form from "./pages/Form";
import UseReducerExample from "./pages/UseReducerExample";
import UseReucerFormExample from "./pages/UseReucerFormExample";
import UseEffectExample from "./pages/UseEffectExample";

function App() {
	const [counter, setCounter] = useState(0);
	const handleIncrement = () => {
		// setCounter((prevState) => prevState + 1);
		// setCounter((prevState) => prevState + 1);
		// setCounter((prevState) => prevState + 1);
		// setCounter((prevState) => prevState + 1);
		setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
	};
	const handleAsyncIncrement = () => {
		setCounter((prevState: number) => prevState + 1);
		setCounter((prevState: number) => prevState + 1);
		setCounter((prevState: number) => prevState + 1);
		setCounter((prevState: number) => prevState + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
		// setCounter(counter + 1);
	};
	return (
		<div className='App'>
			<header className='App-header'></header>

			<UseStateExample
				counter={counter}
				setCounter={setCounter}
				handleIncrement={handleIncrement}
			></UseStateExample>
			<Form></Form>
			<UseReducerExample></UseReducerExample>

			<UseReucerFormExample></UseReucerFormExample>

			<UseEffectExample></UseEffectExample>
		</div>
	);
}

export default App;
