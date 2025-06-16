console.log("Connected");

const title = document.getElementById("title");

title.innerText = "My JS Power";

title.style.color = "red";
console.log(title);

const title2 = document.querySelector(".lists");
console.log("11", title2);
// title2.innerText = "New ";
// title2.textContent = "new";
// console.log(title2);

const items = document.getElementsByClassName("list-items");
console.log("17", items[0]);
for (let index = 0; index < items.length; index++) {
	const element = items[index];
	element.style.color = "green";
	console.log(element);
}

console.log(items.length);

const title3 = document.querySelectorAll("li");
console.log(title3);

const title4 = document.querySelectorAll("p");
console.log(title4);

// const items2 = document.getElementsByTagName("p");

// items2.style.fontSize = "16";

// console.log("36", items2);

// const items3 = document.querySelector("ul");

// console.log(items2);

const bodyName = document.querySelector("body");

console.log(bodyName.childNodes);

console.log(bodyName.children);

const item4 = document.querySelector("ul");
console.log(item4.children);

console.log(item4.childNodes);

const ul = document.getElementById("list-container");

console.log(ul.children);
console.log(ul.childNodes);
console.log(ul.parentElement);

console.log(ul.previousSibling);
console.log(ul.previousElementSibling);

// Manipulating the DOM

// const list = document.getElementsByClassName;

const list = document.querySelector("ul");

console.log(list.innerHTML); //for tag injecting

console.log(list.textContent); //browser e ja dekhi ta dekbo +hidden kichu
console.log(list.innerText); //browser e ja dekhi

// list.innerText = "Rahul";
console.log(list);

const list1 = document.querySelector(".list-items");

console.log(list1);

const list3 = document.querySelector("ul");
const list2 = document.createElement("li");
const list4 = document.createElement("li");

const h2New = document.createElement("h2");
const h3New = document.createElement("h2");
h2New.innerText = "H2 Element";
h3New.innerText = "H2 Element-1";
list2.innerText = "Added by JS DOM";
list4.innerText = "Added by JS DOM-1";

list3.appendChild(list2);
list3.appendChild(list4);
list2.appendChild(h2New);
list4.appendChild(h3New);

console.log(list2);

const h2 = document.querySelector("h2");
console.log(h2);
h2.classList.add("first", "second");
h2.classList.remove("second");
console.log(h2);
const ulNew = document.querySelector("ul");

const second = document.getElementById("second");

const list5 = document.createElement("li");
list5.innerText = "NEW LISTS";

ulNew.insertBefore(list5, second);
const fistElement = document.getElementById("count");
let sum = 0;
function clickMe() {
	console.log("Hello");

	// const fistElement = document.getElementById("count");
	// console.log(fistElement);
	sum = sum + 1;

	fistElement.innerText = sum;
}

const minusBtm = document.getElementById("minusBtn");

minusBtm.addEventListener("click", function () {
	sum = sum - 1;
	console.log(sum);

	fistElement.innerText = sum;
});
