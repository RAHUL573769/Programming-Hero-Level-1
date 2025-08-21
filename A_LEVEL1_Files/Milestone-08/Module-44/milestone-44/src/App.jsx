import "./App.css";
import DaisyNav from "./Components/DaisyNav";
import LineCharts from "./Components/LineCharts";

import Navbar from "./Components/Navbar";
import Phones from "./Components/Phones";
import PriceOptions from "./Components/PriceOptions";
import Stats from "./Components/Stats";

function App() {
	return (
		<>
			<h1>Vite + React</h1>

			<Navbar></Navbar>
			<DaisyNav></DaisyNav>
			<PriceOptions></PriceOptions>
			<Stats></Stats>
			<LineCharts></LineCharts>
			<Phones></Phones>
		</>
	);
}

export default App;
