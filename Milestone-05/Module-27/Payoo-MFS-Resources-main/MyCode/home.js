document
	.getElementById("unique-add-money")
	.addEventListener("click", (event) => {
		event.preventDefault();
		// console.log("button clicked");

		const addMoneyInput = document.getElementById("add-money").value;

		console.log(addMoneyInput);

		const pinInput = document.getElementById("pin-input").value;

		// console.log(pinInput);

		if (pinInput === "1234") {
			console.log("adding money to your account");

			const balance = document.getElementById("account-balance").innerText;

			const addMoneyNumber = parseFloat(addMoneyInput);
			const balanceNumber = parseInt(balance);
			// console.log("22 number ", balanceNumber);
			const newBalance = addMoneyNumber + balanceNumber;
			// console.log(newBalance);
		} else {
			alert("Wrong Pin");
		}
	});
