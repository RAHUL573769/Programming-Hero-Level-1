import "./App.css";
import DaisyNavBar from "./Components/DaisyNavBar/DaisyNavBar";
import Navar from "./Components/Navbar/Navar";
import { IoIosMenu } from "react-icons/io";
import Priceoptions from "./Components/PriceOptions/Priceoptions";
function App() {
	return (
		<>
			<h1 className='text-3xl font-bold underline'>Vite + React</h1>
			{/* <DaisyNavBar></DaisyNavBar> */}
			<Navar></Navar>
			<Priceoptions></Priceoptions>
		</>
	);
}

export default App;
