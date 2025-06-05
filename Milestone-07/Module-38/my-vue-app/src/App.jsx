import Actor from "./Actor";
import "./App.css";
import Singers from "./Singers";
import Todo from "./Todo";

function App() {
	const actors = ["Sakib", "Baapaa", "Raj", "Rubel", "Shriful Islam"];
	const laptops = [
		{
			brand: "Apple",
			model: "MacBook Pro",
			processor: "M3 Pro",
			ram: "16GB",
			storage: "1TB SSD",
			price: 2499,
			available: true,
		},
		{
			brand: "Dell",
			model: "XPS 15",
			processor: "Intel Core i7-13700H",
			ram: "32GB",
			storage: "1TB SSD",
			price: 1999,
			available: true,
		},
		{
			brand: "HP",
			model: "Spectre x360",
			processor: "Intel Core i5-1355U",
			ram: "16GB",
			storage: "512GB SSD",
			price: 1399,
			available: false,
		},
		{
			brand: "Lenovo",
			model: "ThinkPad X1 Carbon Gen 11",
			processor: "Intel Core i7-1365U",
			ram: "16GB",
			storage: "1TB SSD",
			price: 1899,
			available: true,
		},
		{
			brand: "Asus",
			model: "ROG Zephyrus G14",
			processor: "AMD Ryzen 9 7940HS",
			ram: "32GB",
			storage: "1TB SSD",
			price: 2199,
			available: true,
		},
	];

	return (
		<>
			<h1>Vite + React</h1>
			<Todo task='Learn React' isDone={false}></Todo>
			<Person person={{ name: "Rahul Rudra", size: 100 }}></Person>
			<Developer name='Laptop'></Developer>

			{actors.map((actor) => (
				<Actor name={actor}></Actor>
			))}

			{laptops.map((laptop) => (
				<Singers laptop={laptop}></Singers>
			))}
		</>
	);
}
function Person(props) {
	console.log(props);
	const { name, size } = props.person;
	const age = 25;
	const money = 145;
	return (
		<h1 className='student'>
			{" "}
			I am Person with {age} with {money} Name :{name} Size:{size}
		</h1>
	);
}

function Developer(props) {
	const developerStyle = {
		margin: "20px",
		border: "2px solid red",
	};
	console.log(props);
	return (
		<div style={developerStyle}>
			<h1>I am a Developer and have a {props.name}</h1>
		</div>
	);
}

export default App;
