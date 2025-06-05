import React from "react";

const Singers = (props) => {
	console.log(props.laptop);

	const { brand } = props.laptop;
	return <div>Brand :{brand}</div>;
};

export default Singers;
