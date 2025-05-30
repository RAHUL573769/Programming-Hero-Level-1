//get time string

function getTimeString(time) {
	const hour = parseInt(time / 3600);
	let remainingSecond = time % 3600;
	const minute = parseInt(remainingSecond / 60);
	remainingSecond = remainingSecond % 60;
	return `${hour} hour ${minute} minute and ${remainingSecond} seconds ago `;
}
const loadSpecificCategories = (id) => {
	fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
		.then((res) => res.json())
		.then((data) => displayVideos(data.category))
		.catch((error) => console.log(error));
};

// loadSpecificCategories
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

		// const button = document.createElement("button");
		// button.classList = "btn btn-primary";
		// button.innerText = item.category;
		// button.onclick = () => alert("hello");
		const buttonContainer = document.createElement("div");
		buttonContainer.innerHTML = `<button onclick="loadSpecificCategories(${item.category_id})" class="btn btn-primary ">${item.category}</button>`;
		categoryContainer.append(buttonContainer);
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

	videoContainer.innerHTML = "";

	if (videosData.length == 0) {
		videoContainer.innerHTML = `
		<div class="min-h-screen  flex flex-col gap-5 justify-center items-center">
		
		<img src="">
		
		
		</div>
		
		`;

		return;
	}
	// console.log("42", videosData);
	videosData.forEach((video) => {
		const card = document.createElement("div");
		card.classList = "card card-compact";
		card.innerHTML = `<figure class=" h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      <span class="absolute right-2 bottom-3 bg-black rounded  text-white">${getTimeString(
				video.others.posted_date
			)}</span>
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <img class=" w-10 h-10 rounded object-cover" src=${
			video.authors[0].profile_picture
		}>
    <div class=" flex items-center justify-center">

    <p>Posted Date: ${getTimeString(video.others.posted_date)}</p>
    <p>Views:${video.others.views}</p>
    
    ${
			video.authors[0].verified
				? '<img  class="w-7 h-7"src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"></img>'
				: ""
		}
    
    </div>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;

		console.log(video);

		videoContainer.append(card);
	});
};

loadVideos();
