const products = [
	{
		name: "Falcon ZX",
		price: 27500,
		brand: "AutoLux",
		color: "Midnight Blue",
	},
	{
		name: "Comet S",
		price: 18900,
		brand: "NovaMotors",
		color: "Crimson Red",
	},
	{
		name: "Strider GT",
		price: 32400,
		brand: "Velocity",
		color: "Jet Black",
	},
	{
		name: "Terra Runner",
		price: 24800,
		brand: "TrailForce",
		color: "Forest Green",
	},
	{
		name: "AeroMax 3",
		price: 30200,
		brand: "Skyline Auto",
		color: "Silver",
	},
	{
		name: "Civicor",
		price: 21500,
		brand: "MetroDrive",
		color: "Pearl White",
	},
	{
		name: "Phantom XR",
		price: 44900,
		brand: "Titanium Motors",
		color: "Charcoal Gray",
	},
	{
		name: "EcoSwift",
		price: 17300,
		brand: "GreenWheel",
		color: "Lime Green",
	},
	{
		name: "Vento R5",
		price: 28900,
		brand: "Vortex",
		color: "Ocean Blue",
	},
	{
		name: "Ridgeback X",
		price: 39900,
		brand: "Ironhorse",
		color: "Sunset Orange",
	},
];

const brands = products.map((product) => console.log(product.brand));

products.forEach((product) => {
	console.log(product);
});
//filter
const cheap = products.filter((product) => product.price <= 40000);
console.log("Cheap", cheap);
//find

const special = products.find((products) => products.name.includes("n"));

console.log("Special", special);

const remaining = products.filter((p) => p.name !== "EcoSwift");

console.log("Remaining", remaining);

const money = 100;
let drink = money > 50 ? "Coke" : "Biriyani";
console.log(drink);
