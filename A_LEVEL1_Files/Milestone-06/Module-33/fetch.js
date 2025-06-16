function loadData() {
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((json) => displayUsers(json));
}

function displayUsers(users) {
	const ul = document.getElementById("user-list");

	for (const user of users) {
		const li = document.createElement("li");
		li.innerText = user.name;
		ul.appendChild(li);
	}
}

function loadPosts() {
	fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((data) => displayPosts(data));
}

function displayPosts(data) {
	for (const post of data) {
		console.log(post);
		const postArea = document.getElementById("postContainer");

		const div = document.createElement("div");
		div.innerHTML = ` <h4>User:${post.title}</h4>
		<h5>Post Title  :${post.body}</h5>
		<p>Post Description:${post.body} </p>
		
		`;

		postArea.appendChild(div);
	}
	// console.log(data);
}
