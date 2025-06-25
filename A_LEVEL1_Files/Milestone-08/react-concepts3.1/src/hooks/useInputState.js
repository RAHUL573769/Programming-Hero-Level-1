import { useState } from "react";

const useInputState = (defaultValue = null) => {
	const [value, setValue] = useState(defaultValue);

	const onChange = (e) => {
		setValue(e.target.value);
	};
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return { value: value, handleChange: handleChange, onChange: onChange };
};

export default useInputState;
