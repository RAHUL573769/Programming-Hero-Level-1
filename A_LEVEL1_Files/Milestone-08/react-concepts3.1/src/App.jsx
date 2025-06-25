/* eslint-disable no-unused-vars */
import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import RefForm from "./Components/RefForm/RefForm";
import Reusuable from "./Components/Reusuable Forms/Reusuable";
import SingleForm from "./Components/SingleForm/SingleForm";
import StatelessForm from "./Components/StatelessForm/StatelessForm";
import Uncle from "./Components/Uncle/Uncle";

function App() {
	const handleSignUpSubmit = (data) => {
		console.log(data);
	};
	return (
		<>
			<h1>Form Master</h1>
			{/* <SingleForm></SingleForm> */}
			{/* <StatelessForm></StatelessForm>

			<RefForm></RefForm> */}
			<Grandpa></Grandpa>
			<Reusuable formTitle={"Sign UP"} handleSignUpSubmit={handleSignUpSubmit}>
				<div>
					<h2>Sign Up</h2>
					<p>Please Signup rightnow</p>
				</div>
			</Reusuable>
			<Reusuable formTitle={"Login"}>
				<div></div>
			</Reusuable>

			<Uncle></Uncle>
		</>
	);
}

export default App;
