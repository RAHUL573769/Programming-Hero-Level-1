//crate loadCategories

const loadCategories = () => {
	fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
		.then((res) => res.json())
		.then((data) => displayCategories(data.categories))
		.catch((error) => {
			console.log(error);
		});

	console.log("load created");
};
const displayCategories = (categories) => {
	const categoryContainer = document.getElementById("categories");
	categories.forEach((item) => {
		console.log(item);

		const button = document.createElement("button");
		button.classList = "btn btn-primary";
		button.innerText = item.category;
		categoryContainer.append(button);
	});
};

loadCategories();

const loadVideos = () => {
	fetch("https://openapi.programming-hero.com/api/phero-tube/videos").then(
		(res) =>
			res
				.json()
				.then((data) => displayVideos(data.videos))
				.catch((err) => console.log(err))
	);
};

const displayVideos = (videosData) => {
	const videoContainer = document.getElementById("videos");
	// console.log("42", videosData);
	videosData.forEach((video) => {
		const card = document.createElement("div");
		card.classList = "card bg-base-100 w-96 shadow-xl";
		card.innerHTML = `<figure class=" h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;

		console.log(video);

		videoContainer.append(card);
	});
};

loadVideos();
