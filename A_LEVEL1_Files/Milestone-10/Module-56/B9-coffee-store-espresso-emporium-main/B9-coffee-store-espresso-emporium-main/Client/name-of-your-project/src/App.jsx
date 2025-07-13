import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/Coffee/CoffeeCard";

function App() {
	const coffees = useLoaderData();
	return (
		<>
			<h1>Hot Cold Coffee {coffees.length}</h1>

			<div className='grid md:grid-cols-2 gap-4'>
				{coffees.map((coffee) => (
					<CoffeeCard coffee={coffee} key={coffee._id}></CoffeeCard>
				))}
			</div>
		</>
	);
}

export default App;
