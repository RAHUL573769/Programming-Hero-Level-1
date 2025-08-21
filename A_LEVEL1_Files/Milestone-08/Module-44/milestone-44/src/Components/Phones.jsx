/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
const Phones = () => {
	const [phones, setPhones] = useState([]);

	axios
		.get("https://openapi.programming-hero.com/api/phones?search=iphone")
		.then((data) => {
			const phoneData = data.data.data;
			setPhones(phoneData);
		})
		.catch((error) => console.log(error));
	return <div>Phone Data:{phones.length}</div>;
};

export default Phones;
