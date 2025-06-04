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

const brands = laptops.map((x) => x.brand);

console.log(brands);

//3. filter

const name1 = laptops.filter((x) => x.brand.includes("A"));
console.log("56", name1);
const name2 = laptops.find((x) => x.brand.includes("A"));
console.log("58", name1);

for (x of laptops) {
	console.log("61", x.model);
}
