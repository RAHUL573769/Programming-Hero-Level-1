import React, { useReducer } from "react";
const initialState = { name: "", email: "", password: "" };

type TAction = { type: string; payload: string };
const reducer = (currentState: typeof initialState, action: TAction) => {
	console.log(action);
	switch (action.type) {
		case "addName":
			return { ...currentState, name: action.payload };
		case "addEmail":
			return { ...currentState, email: action.payload };
		case "addPassword":
			return { ...currentState, email: action.payload };
		default:
			return currentState;
	}
};

const UseReucerFormExample = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("State", state);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) =>
						dispatch({ type: "addName", payload: e.target.value })
					}
					className=''
					type='text'
					name='name'
					id='name'
				></input>
				<br></br>
				<input
					onChange={(e) =>
						dispatch({ type: "addPassword", payload: e.target.value })
					}
					className=''
					type='password'
					name='password'
					id='password'
				></input>
				<br></br>
				<input
					onChange={(e) =>
						dispatch({ type: "addEmail", payload: e.target.value })
					}
					className=''
					type='email'
					name='email'
					id='email'
				></input>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default UseReucerFormExample;
