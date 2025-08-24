import "./App.css";
import HookForm from "./Components/HookForm";
import RerForm from "./Components/RerForm";
import SimpleForm from "./Components/SimpleForm";
import StatefulForm from "./Components/StatefulForm";

function App() {
	return (
		<>
			<h1>Vite + React</h1>
			{/* <SimpleForm></SimpleForm> */}
			<StatefulForm></StatefulForm>

			{/* <RerForm></RerForm> */}
			<HookForm></HookForm>
		</>
	);
}

export default App;
