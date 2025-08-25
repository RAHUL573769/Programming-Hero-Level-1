// console.log(React);

const root = document.getElementById("root");
root.innerText = "Hello World";

// console.log(root1);

// const root1 = ReactDOM.createRoot(document.getElementById("root"));

const App = React.createElement(
	"h1",
	{ style: { color: "red" } },
	"Hello World"
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));

root2.render(App);
