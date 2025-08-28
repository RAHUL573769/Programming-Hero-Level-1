import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { add } from "./redux/features/counterSlice";

function App() {
	const count = useSelector((state) => state.counter.count);

	const dispatch = useDispatch();
	return (
		<>
			<div></div>
			<h1>Redux Toolkit</h1>
			<p>{count}</p>
			<button onClick={() => dispatch(add())}>Add </button>
			<button>Subtract</button>
		</>
	);
}

export default App;
