/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from "react";
import "./App.css";
import UseRefExample from "./Components/UseRefExample";
import UseRefExample1 from "./Components/UseRefExample1";
import { ThemeContext, TThemeContext } from "./provider/ThemeProvider";
import Avatar from "./Avatar";
import { withBorder } from "./withBorder";

function App() {
	const { dark, setDark } = useContext(ThemeContext) as TThemeContext;

	const UserWithBorder = withBorder(Us);
	return (
		<div>
			<button></button>
			<UseRefExample></UseRefExample>
			<button
				className={`h-screen  w-full flex justify-center items-center ${
					dark ? "bg-black" : "bg-white"
				}`}
			>
				Toggle
			</button>
			<UseRefExample1></UseRefExample1>
			<Avatar></Avatar>
		</div>
	);
}

export default App;
