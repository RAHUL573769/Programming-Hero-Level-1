document
	.getElementById("unique-add-money")
	.addEventListener("click", (event) => {
		event.preventDefault();
		console.log("button clicked");

		const addMoneyInput = document.getElementById("add-money").value;

		console.log(addMoneyInput);

		const pinInput = document.getElementById("pin-input").value;

		console.log(pinInput);
	});
