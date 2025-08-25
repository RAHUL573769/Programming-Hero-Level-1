import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState: any, action: any) => {
	switch (action.type) {
		case "increment":
			return { count: currentState.count + 1 };
		case "decrement":
			return { count: currentState.count - 1 };
		case "incrementBySetAmount":
			return { count: currentState.count + action.payload };
		// return { count: currentState.count - 1 };
		default:
			return currentState;
	}
};
const UseReducerExample = () => {
	// const [state, setState] = useState(initialState);
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			<h1>UseReducer</h1>

			<h1>{state.count}</h1>
			<button onClick={() => dispatch({ type: "increment" })}>Increment</button>
			<button
				onClick={() => dispatch({ type: "incrementBySetAmount", payload: 3 })}
			>
				Increment By 3
			</button>
			<button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
		</div>
	);
};

export default UseReducerExample;
