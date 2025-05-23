console.log("cash-out connected");

document
	.getElementById("unique-cashout-money")
	.addEventListener("click", (event) => {
		event.preventDefault();

		const cashOut = document.getElementById("cash-out-money").value;
		const cashOutNumber = parseFloat(cashOut);
		const pinNumber = document.getElementById("cashout-pin-input").value;
		console.log("Clicked");
		if (pinNumber === "1234") {
			const balance = document.getElementById("account-balance").innerText;

			const balanceNumber = parseFloat(balance);

			const newBalance = balanceNumber - cashOutNumber;
			console.log(newBalance);
			document.getElementById("account-balance").innerText = newBalance;
			// console.log(newBalance);
		} else {
			alert("Failed To Cash Out");
		}
	});
