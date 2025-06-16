const test = async () => {
	const response = await fetch(
		" https://openapi.programming-hero.com/api/videos/category/1000"
	);

	const data = await response.json();

	console.log(data);
};
test();
